
document.addEventListener("DOMContentLoaded", function () {
  const fadeElements = document.querySelectorAll(".fade-in");

  function handleScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    fadeElements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < triggerBottom) {
        el.classList.add("visible");
      } else {
        el.classList.remove("visible");
      }
    });
  }

  window.addEventListener("scroll", handleScroll);

  handleScroll();
});
