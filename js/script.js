const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navMenu = document.querySelector("nav ul");

mobileMenuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });

      navMenu.classList.remove("show");
    }
  });
});

const animateOnScroll = () => {
  const elements = document.querySelectorAll(
    ".timeline-item, .skill-category, .cert-card, .highlight-card, .contact-item"
  );

  elements.forEach((element) => {
    const position = element.getBoundingClientRect();

    if (position.top < window.innerHeight * 0.8) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }
  });
};

document
  .querySelectorAll(
    ".timeline-item, .skill-category, .cert-card, .highlight-card, .contact-item"
  )
  .forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });

window.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", animateOnScroll);
