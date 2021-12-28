///////////////////// Make Mobile Navigation work ////////////////////
const buttonMobileEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

buttonMobileEl.addEventListener("click", () => {
  headerEl.classList.toggle(`nav--open`);
});

///////////////////// Smooth Scrolling /////////////////////
const allLinks = document.querySelectorAll(`a:link`);

allLinks.forEach((link) => {
  link.addEventListener(`click`, (event) => {
    event.preventDefault();
    const href = link.getAttribute(`href`);

    // Scroll back to top
    if (href === `#`)
      window.scrollTo({
        top: 0,
        behavior: `smooth`,
      });
    // Scroll to other links
    if (href !== `#` && href.startsWith(`#`)) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close Mobile Navigation
    if (link.classList.contains(`main-nav-link`)) {
      headerEl.classList.toggle("nav--open");
    }
  });
});

///////////////////// Sticky Navigation /////////////////////
const sectionHeroEl = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];

    if (!ent.isIntersecting) document.body.classList.add("sticky");
    if (ent.isIntersecting) document.body.classList.remove("sticky");
  },
  {
    // Observe inside the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(sectionHeroEl);

///////////////////// Accordion /////////////////////
const accordionItemEl = document.querySelectorAll(".faq-container .item");
accordionItemEl.forEach((acc) => {
  acc.addEventListener("click", () => {
    acc.classList.toggle("open");
  });
});
