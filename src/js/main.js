// ===== Theme toggle (persisted) =====
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const saved = localStorage.getItem('theme');
if (saved) root.setAttribute('data-theme', saved);
themeToggle.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

// ===== Navbar scroll state + progress bar =====
const nav = document.getElementById('nav');
const progress = document.getElementById('scrollProgress');
const onScroll = () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
  const h = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%';
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ===== Mobile menu =====
const burger = document.getElementById('navBurger');
const links = document.getElementById('navLinks');
burger.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  burger.classList.toggle('open', open);
});
links.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => {
    links.classList.remove('open');
    burger.classList.remove('open');
  })
);

// ===== Reveal on scroll =====
const revealer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        revealer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 60}ms`;
  revealer.observe(el);
});

// ===== Count-up stats =====
const counted = new WeakSet();
const countObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting || counted.has(e.target)) return;
      counted.add(e.target);
      const el = e.target;
      const target = parseInt(el.dataset.count, 10);
      const dur = 1400;
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(eased * target).toLocaleString();
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  },
  { threshold: 0.5 }
);
document.querySelectorAll('.stat__num').forEach((el) => countObserver.observe(el));

// ===== Rotating role words (typewriter) =====
const roleEl = document.getElementById('roleRotate');
if (roleEl) {
  const words = [
    "users don't have to.",
    'bugs never reach production.',
    'releases ship with confidence.',
    'requirements stay crystal clear.',
  ];
  let wi = 0, ci = 0, deleting = false;
  const type = () => {
    const word = words[wi];
    ci += deleting ? -1 : 1;
    roleEl.textContent = word.slice(0, ci);
    let delay = deleting ? 45 : 85;
    if (!deleting && ci === word.length) { delay = 1800; deleting = true; }
    else if (deleting && ci === 0) { deleting = false; wi = (wi + 1) % words.length; delay = 350; }
    setTimeout(type, delay);
  };
  setTimeout(type, 900);
}

// ===== Scrollspy: highlight active nav link =====
const sections = [...document.querySelectorAll('main section[id], section[id]')];
const navMap = new Map(
  [...document.querySelectorAll('.nav__links a')].map((a) => [a.getAttribute('href').slice(1), a])
);
const spy = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      const link = navMap.get(e.target.id);
      if (!link) return;
      if (e.isIntersecting) {
        navMap.forEach((l) => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  },
  { rootMargin: '-45% 0px -50% 0px' }
);
sections.forEach((s) => spy.observe(s));

// ===== Back to top =====
const toTop = document.getElementById('toTop');
if (toTop) {
  window.addEventListener('scroll', () => toTop.classList.toggle('show', window.scrollY > 600), { passive: true });
  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ===== Footer year =====
document.getElementById('year').textContent = new Date().getFullYear();
