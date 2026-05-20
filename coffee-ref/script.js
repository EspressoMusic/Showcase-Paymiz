/* ============================================
   BREW HAVEN — Interactions & Animations
   ============================================ */

// ====== PAGE LOADER ======
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) loader.classList.add('gone');
    document.body.classList.add('loaded');
  }, 900);
});

// ====== CUSTOM CURSOR ======
const cursor = document.getElementById('cursor');
const cursorDot = document.getElementById('cursorDot');
let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  if (cursorDot) {
    cursorDot.style.left = mouseX + 'px';
    cursorDot.style.top = mouseY + 'px';
  }
});

function animateCursor() {
  cursorX += (mouseX - cursorX) * 0.18;
  cursorY += (mouseY - cursorY) * 0.18;
  if (cursor) {
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
  }
  requestAnimationFrame(animateCursor);
}
animateCursor();

document.querySelectorAll('a, button, .menu-card, .mini-card, .feature, .g-item, .review-card, .tab').forEach(el => {
  el.addEventListener('mouseenter', () => cursor && cursor.classList.add('grow'));
  el.addEventListener('mouseleave', () => cursor && cursor.classList.remove('grow'));
});

// ====== NAVBAR SCROLL EFFECT ======
const navbar = document.getElementById('navbar');
const scrollProgress = document.getElementById('scrollProgress');
const backTop = document.getElementById('backTop');

function onScroll() {
  const sy = window.scrollY;
  if (navbar) {
    if (sy > 60) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  }
  if (scrollProgress) {
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const pct = Math.min(100, (sy / height) * 100);
    scrollProgress.style.width = pct + '%';
  }
  if (backTop) {
    if (sy > 600) backTop.classList.add('show');
    else backTop.classList.remove('show');
  }
  updateActiveLink();
  parallax();
  heroParallax();
}
window.addEventListener('scroll', onScroll, { passive: true });

// ====== ACTIVE LINK ON SCROLL ======
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
function updateActiveLink() {
  const sy = window.scrollY + 120;
  let current = '';
  sections.forEach(s => {
    if (s.offsetTop <= sy && s.offsetTop + s.offsetHeight > sy) {
      current = s.id;
    }
  });
  navLinks.forEach(l => {
    l.classList.toggle('active', l.getAttribute('href') === '#' + current);
  });
}

// ====== MOBILE MENU ======
const menuToggle = document.getElementById('menuToggle');
const navLinksEl = document.getElementById('navLinks');
if (menuToggle && navLinksEl) {
  menuToggle.addEventListener('click', () => {
    navLinksEl.classList.toggle('open');
    menuToggle.classList.toggle('open');
    document.body.classList.toggle('no-scroll', navLinksEl.classList.contains('open'));
  });
  navLinksEl.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinksEl.classList.remove('open');
      menuToggle.classList.remove('open');
      document.body.classList.remove('no-scroll');
    });
  });
  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!navLinksEl.contains(e.target) && !menuToggle.contains(e.target) && navLinksEl.classList.contains('open')) {
      navLinksEl.classList.remove('open');
      menuToggle.classList.remove('open');
      document.body.classList.remove('no-scroll');
    }
  });
}

// ====== REVEAL ON SCROLL ======
const reveals = document.querySelectorAll('[data-reveal]');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
reveals.forEach((el, i) => {
  if (i % 3 === 1) el.classList.add('delay-1');
  if (i % 3 === 2) el.classList.add('delay-2');
  observer.observe(el);
});

// ====== COUNTERS ======
const counters = document.querySelectorAll('.counter');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      const duration = 1800;
      const start = performance.now();
      function tick(now) {
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.floor(eased * target).toLocaleString();
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = target.toLocaleString();
      }
      requestAnimationFrame(tick);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });
counters.forEach(c => counterObserver.observe(c));

// ====== HERO CUP PARALLAX ======
const cupWrap = document.getElementById('cupWrap');
function heroParallax() {
  if (!cupWrap) return;
  const sy = window.scrollY;
  if (sy < window.innerHeight) {
    cupWrap.style.transform = `translateY(${sy * 0.18}px) rotate(${sy * -0.02}deg)`;
  }
}

// ====== MOUSE MOVE TILT ON HERO CUP ======
const heroVisual = document.querySelector('.hero-visual');
if (heroVisual && cupWrap) {
  heroVisual.addEventListener('mousemove', (e) => {
    const rect = heroVisual.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    cupWrap.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${y * -10}deg)`;
  });
  heroVisual.addEventListener('mouseleave', () => {
    cupWrap.style.transform = '';
  });
}

// ====== STORY PARALLAX LAYERS ======
const pBg = document.querySelector('.p-bg');
const pMid = document.querySelector('.p-mid');
const pFront = document.querySelector('.p-front');
function parallax() {
  const story = document.querySelector('.story');
  if (!story) return;
  const rect = story.getBoundingClientRect();
  const inView = rect.top < window.innerHeight && rect.bottom > 0;
  if (!inView) return;
  const offset = rect.top * 0.3;
  if (pBg) pBg.style.transform = `translateY(${offset * 0.2}px)`;
  if (pMid) pMid.style.transform = `translateY(${offset * 0.5}px)`;
  if (pFront) pFront.style.transform = `translateY(${offset * 0.8}px)`;
}

// ====== MENU TABS ======
const tabs = document.querySelectorAll('.tab');
const menuCards = document.querySelectorAll('.menu-card');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const cat = tab.dataset.cat;
    menuCards.forEach(card => {
      if (card.dataset.cat === cat) {
        card.classList.remove('hidden');
        setTimeout(() => card.classList.add('visible'), 30);
      } else {
        card.classList.add('hidden');
        card.classList.remove('visible');
      }
    });
  });
});

// ====== ORDER BUTTON SPARKLE ======
const orderBtn = document.getElementById('orderBtn');
if (orderBtn) {
  orderBtn.addEventListener('click', () => {
    orderBtn.textContent = 'Cup is on the way ✦';
    setTimeout(() => (orderBtn.textContent = 'Order Now'), 2400);
  });
}

// ====== SMOOTH SCROLL FOR INTERNAL LINKS ======
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (id.length > 1) {
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        const y = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  });
});

// ====== BACK TO TOP ======
if (backTop) {
  backTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ====== MENU CARD TILT (3D) ======
document.querySelectorAll('.menu-card-inner').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${y * -6}deg) translateY(-8px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// ====== INIT ======
onScroll();
