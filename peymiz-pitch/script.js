/* Peymiz Pitch — optimized for smooth scroll & interaction */

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isCoarsePointer = window.matchMedia("(hover: none)").matches;
const isNarrow = window.matchMedia("(max-width: 768px)").matches;
const isMobile =
  isCoarsePointer || isNarrow || window.matchMedia("(max-width: 899px)").matches;

if (isMobile) document.body.classList.add("is-mobile");

/* Theme toggle — אור / חושך */
const THEME_KEY = "peymiz-theme";
const themeToggle = document.getElementById("themeToggle");
const themeMeta = document.querySelector('meta[name="theme-color"]');

function getTheme() {
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

function applyTheme(theme) {
  const isLight = theme === "light";
  if (isLight) {
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
  themeToggle?.setAttribute("aria-checked", String(isLight));
  if (themeMeta) themeMeta.content = isLight ? "#f0f4fa" : "#060d18";
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch (e) {}
}

const initialTheme = getTheme();
applyTheme(initialTheme);

themeToggle?.addEventListener("click", () => {
  applyTheme(getTheme() === "light" ? "dark" : "light");
});

/* Loader — short on mobile so nothing blocks the screen */
function hideLoader() {
  document.getElementById("loader")?.classList.add("gone");
  document.body.classList.add("loaded");
}

if (isMobile || prefersReducedMotion) {
  hideLoader();
  document.addEventListener("DOMContentLoaded", hideLoader, { once: true });
} else {
  window.addEventListener("load", () => setTimeout(hideLoader, 280), { once: true });
}

const navbar = document.getElementById("navbar");
const scrollProgress = document.getElementById("scrollProgress");
const backTop = document.getElementById("backTop");
const sections = [...document.querySelectorAll("section[id]")];

let scrollScheduled = false;
let lastScrollY = -1;

function onScrollFrame() {
  scrollScheduled = false;
  const sy = window.scrollY;
  if (sy === lastScrollY) return;
  lastScrollY = sy;

  if (navbar) navbar.classList.toggle("scrolled", sy > 50);

  if (scrollProgress) {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    if (h > 0) scrollProgress.style.width = Math.min(100, (sy / h) * 100) + "%";
  }

  if (backTop) backTop.classList.toggle("show", sy > 500);

  const probe = sy + 100;
  let current = sections[0]?.id || "";
  for (const s of sections) {
    if (s.offsetTop <= probe) current = s.id;
    else break;
  }
  document.querySelectorAll(".nav-links a, .mobile-nav a").forEach((a) => {
    a.classList.toggle("active", a.getAttribute("href") === "#" + current);
  });
}

function scheduleScroll() {
  if (!scrollScheduled) {
    scrollScheduled = true;
    requestAnimationFrame(onScrollFrame);
  }
}

window.addEventListener("scroll", scheduleScroll, { passive: true });

/* Reveal — on mobile show content immediately */
if (isMobile && !prefersReducedMotion) {
  document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("visible"));
}

/* Reveal — single observer, light threshold */
if (!prefersReducedMotion && !isMobile) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.08, rootMargin: "0px 0px 40px 0px" }
  );

  document.querySelectorAll("[data-reveal]").forEach((el, i) => {
    if (i % 4 === 1) el.classList.add("delay-1");
    if (i % 4 === 2) el.classList.add("delay-2");
    if (i % 4 === 3) el.classList.add("delay-3");
    revealObserver.observe(el);
  });

  document.querySelectorAll(".pitch-card, .step-card").forEach((card, i) => {
    card.setAttribute("data-reveal", "");
    if (i % 3 === 1) card.classList.add("delay-1");
    if (i % 3 === 2) card.classList.add("delay-2");
    revealObserver.observe(card);
  });
} else {
  document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("visible"));
}

if (isMobile) {
  document.querySelectorAll("[data-reveal]:not(.visible)").forEach((el) => el.classList.add("visible"));
}

/* Mobile menu */
const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");
if (menuToggle && mobileNav) {
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("open");
    mobileNav.classList.toggle("open");
    document.body.style.overflow = mobileNav.classList.contains("open") ? "hidden" : "";
  });
  mobileNav.addEventListener("click", (e) => {
    if (e.target.closest("a")) {
      menuToggle.classList.remove("open");
      mobileNav.classList.remove("open");
      document.body.style.overflow = "";
    }
  });
}

/* Smooth scroll */
document.addEventListener("click", (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const id = a.getAttribute("href");
  if (!id || id === "#") return;
  const target = document.querySelector(id);
  if (!target) return;
  e.preventDefault();
  const y = target.getBoundingClientRect().top + window.scrollY - 76;
  window.scrollTo({ top: y, behavior: prefersReducedMotion ? "auto" : "smooth" });
});

if (backTop) {
  backTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  });
}

scheduleScroll();

/* ── Enhancements (deferred so first paint is fast) ── */

const LETTER_TITLE_SEL =
  ".section-title, .hero-title .line, .cta-title, .pitch-card h3, .split-panel h3, .step-card h3";
const GLIDE_TEXT_SEL =
  ".section-lead, .section-body, .pitch-card p, .step-card p, .split-panel p, .invest-box p";
const BRAND_IMG_SRC = "assets/peymiz-wordmark.png";

function brandImgHtml() {
  return `<img src="${BRAND_IMG_SRC}" alt="Peymiz" class="brand-inline" dir="ltr" lang="en" loading="lazy" decoding="async" />`;
}

function wrapLatinBrands() {
  const skip = ".title-letters, .brand-inline, .logo-wordmark";
  document
    .querySelectorAll(
      ".section-body, .section-lead, .section-num, .pitch-card p, .pitch-card h3, .step-card p"
    )
    .forEach((el) => {
      if (el.dataset.brandWrapped || el.closest(skip)) return;
      if (!/Peymiz/i.test(el.textContent)) return;
      el.innerHTML = el.innerHTML.replace(/Peymiz/gi, brandImgHtml());
      el.dataset.brandWrapped = "1";
    });
}

function appendCharSpan(parent, ch) {
  const span = document.createElement("span");
  span.className = "char" + (/\s/.test(ch) ? " space" : "");
  span.textContent = /\s/.test(ch) ? "\u00a0" : ch;
  parent.appendChild(span);
}

function appendBrandImg(parent) {
  const img = document.createElement("img");
  img.src = BRAND_IMG_SRC;
  img.alt = "Peymiz";
  img.className = "brand-inline brand-inline--title";
  img.setAttribute("dir", "ltr");
  img.loading = "lazy";
  img.decoding = "async";
  parent.appendChild(img);
}

function isHebrewChar(ch) {
  return /[\u0590-\u05FF]/.test(ch);
}

function appendWordSpans(parent, word) {
  if (/^peymiz$/i.test(word)) {
    appendBrandImg(parent);
    return;
  }
  const wrapper = document.createElement("span");
  wrapper.className = isHebrewChar(word[0]) ? "hebrew-word" : "latin-brand";
  if (!isHebrewChar(word[0])) wrapper.setAttribute("dir", "ltr");
  [...word].forEach((c) => appendCharSpan(wrapper, c));
  parent.appendChild(wrapper);
}

function splitTitleLetters(el) {
  if (el.dataset.lettersDone || el.querySelector("img")) return;
  const text = el.textContent;
  el.textContent = "";
  el.classList.add("title-letters");
  el.setAttribute("aria-label", text);

  let i = 0;
  while (i < text.length) {
    const ch = text[i];
    if (/\s/.test(ch)) {
      appendCharSpan(el, ch);
      i++;
    } else if (/[A-Za-z0-9]/.test(ch)) {
      let word = "";
      while (i < text.length && /[A-Za-z0-9]/.test(text[i])) word += text[i++];
      appendWordSpans(el, word);
    } else if (isHebrewChar(ch) || ch === "\u05BE" || ch === "-") {
      let word = "";
      while (i < text.length) {
        const c = text[i];
        if (isHebrewChar(c) || c === "\u05BE" || c === "-") word += text[i++];
        else if (word && /[.,!?;:)\]]/.test(c)) word += text[i++];
        else break;
      }
      appendWordSpans(el, word);
    } else {
      appendCharSpan(el, ch);
      i++;
    }
  }
  el.dataset.lettersDone = "1";
}

function initGlideText(el) {
  if (!el.dataset.glideDone) {
    el.classList.add("hover-glide");
    el.dataset.glideDone = "1";
  }
}

function initMegaCards(selector) {
  const cards = document.querySelectorAll(selector);
  const grids = new Set();
  cards.forEach((c) => {
    const g = c.closest(".cards, .steps, .split");
    if (g) grids.add(g);
  });

  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.classList.add("is-mega");
      const g = card.closest(".cards, .steps, .split");
      if (g) g.classList.add("has-mega");
    });
    card.addEventListener("mouseleave", () => {
      card.classList.remove("is-mega");
      const g = card.closest(".cards, .steps, .split");
      if (g && !g.querySelector(`${selector}.is-mega`)) g.classList.remove("has-mega");
    });
  });

  if (isCoarsePointer) {
    document.addEventListener(
      "click",
      (e) => {
        const card = e.target.closest(selector);
        if (card) {
          const open = card.classList.contains("is-mega");
          cards.forEach((c) => c.classList.remove("is-mega"));
          grids.forEach((g) => g.classList.remove("has-mega"));
          if (!open) {
            card.classList.add("is-mega");
            card.closest(".cards, .steps, .split")?.classList.add("has-mega");
          }
          return;
        }
        if (!e.target.closest(selector)) {
          cards.forEach((c) => c.classList.remove("is-mega"));
          grids.forEach((g) => g.classList.remove("has-mega"));
        }
      },
      { passive: true }
    );
  }
}

function runEnhancements() {
  wrapLatinBrands();
  document.querySelectorAll(GLIDE_TEXT_SEL).forEach(initGlideText);
  initMegaCards(".pitch-card");
  initMegaCards(".step-card");
  initMegaCards(".split-panel");

  if (!prefersReducedMotion && !isNarrow && !isCoarsePointer) {
    document.querySelectorAll(LETTER_TITLE_SEL).forEach(splitTitleLetters);
  }
}

if ("requestIdleCallback" in window) {
  requestIdleCallback(runEnhancements, { timeout: 1200 });
} else {
  setTimeout(runEnhancements, 1);
}

/*─ Confetti בסוף המצגת (שקף סיום) ── */
let confettiFired = false;
let logoConfettiShape = null;

const CONFETTI_COLORS = ["#3b82f6", "#60a5fa", "#93c5fd", "#7c3aed", "#c4b5fd", "#ffffff"];

function loadLogoConfettiShape(confettiFn) {
  if (logoConfettiShape) return Promise.resolve(logoConfettiShape);
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      try {
        if (typeof confettiFn.shapeFromImage === "function") {
          logoConfettiShape = confettiFn.shapeFromImage(img);
        }
      } catch (e) {
        logoConfettiShape = null;
      }
      resolve(logoConfettiShape);
    };
    img.onerror = () => resolve(null);
    img.src = "assets/peymiz-icon-purple.png";
  });
}

function launchEndConfetti() {
  if (confettiFired || prefersReducedMotion) return;
  const confettiFn = window.confetti;
  if (typeof confettiFn !== "function") return;
  confettiFired = true;

  const scale = isMobile ? 0.6 : 1;
  const z = 10001;

  loadLogoConfettiShape(confettiFn).then((logo) => {
    const mixedShapes = logo ? [logo, "circle", "square"] : ["circle", "square"];

    confettiFn({
      particleCount: Math.floor(140 * scale),
      spread: 110,
      startVelocity: 48,
      origin: { x: 0.5, y: 0.42 },
      colors: CONFETTI_COLORS,
      shapes: mixedShapes,
      scalar: 1.05,
      zIndex: z,
    });

    setTimeout(() => {
      confettiFn({
        particleCount: Math.floor(100 * scale),
        angle: 58,
        spread: 72,
        origin: { x: 0.02, y: 0.55 },
        colors: CONFETTI_COLORS,
        shapes: mixedShapes,
        zIndex: z,
      });
      confettiFn({
        particleCount: Math.floor(100 * scale),
        angle: 122,
        spread: 72,
        origin: { x: 0.98, y: 0.55 },
        colors: CONFETTI_COLORS,
        shapes: mixedShapes,
        zIndex: z,
      });
    }, 180);

    const duration = isMobile ? 3000 : 5000;
    const end = Date.now() + duration;
    const rain = setInterval(() => {
      const useLogo = logo && Math.random() < 0.38;
      confettiFn({
        particleCount: Math.floor((useLogo ? 5 : 14) * scale),
        startVelocity: useLogo ? 30 : 24,
        spread: useLogo ? 95 : 65,
        ticks: useLogo ? 240 : 170,
        gravity: useLogo ? 0.62 : 1,
        shapes: useLogo ? [logo] : mixedShapes,
        scalar: useLogo ? (isMobile ? 1.3 : 1.85) : 1,
        colors: CONFETTI_COLORS,
        origin: { x: Math.random(), y: Math.random() * 0.32 },
        zIndex: z,
      });
      if (Date.now() > end) clearInterval(rain);
    }, 100);

    if (logo) {
      const logoBursts = isMobile ? 10 : 18;
      for (let i = 0; i < logoBursts; i++) {
        setTimeout(() => {
          confettiFn({
            particleCount: Math.floor(7 * scale),
            spread: 120,
            startVelocity: 34,
            ticks: 260,
            gravity: 0.68,
            shapes: [logo],
            scalar: isMobile ? 1.35 : 2,
            origin: { x: 0.1 + Math.random() * 0.8, y: 0.08 + Math.random() * 0.22 },
            zIndex: z,
          });
        }, 350 + i * 260);
      }
    }
  });
}

const closingSection = document.getElementById("closing");
if (closingSection && !prefersReducedMotion) {
  const confettiObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          launchEndConfetti();
          confettiObserver.disconnect();
        }
      }
    },
    { threshold: 0.22, rootMargin: "0px 0px -8% 0px" }
  );
  confettiObserver.observe(closingSection);

  if (location.hash === "#closing" || location.hash === "#investment") {
    requestAnimationFrame(() => {
      const rect = closingSection.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) launchEndConfetti();
    });
  }
}
