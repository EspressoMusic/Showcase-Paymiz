/**
 * Active nav on scroll + smooth section highlighting
 */
(function () {
  const links = document.querySelectorAll(".nav__link");
  const sections = ["hero", "features", "inventory", "analytics", "pricing", "contact"];

  const sectionEls = sections
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  function setActive(id) {
    links.forEach((link) => {
      const href = link.getAttribute("href");
      link.classList.toggle("nav__link--active", href === `#${id}`);
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
  );

  sectionEls.forEach((el) => observer.observe(el));

  links.forEach((link) => {
    link.addEventListener("click", () => {
      const id = link.getAttribute("href")?.slice(1);
      if (id) setActive(id);
    });
  });
})();
