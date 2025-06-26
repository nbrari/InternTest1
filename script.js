lucide.createIcons();

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});
const slides = document.querySelector(".slides");
const carousel = document.querySelector(".carousel");
const indicators = document.querySelectorAll(".indicator");
const slideW = carousel.offsetWidth;

indicators.forEach((indicator, idx) => {
  indicator.addEventListener("click", () => {
    slides.style.transform = `translateX(-${idx * slideW}px)`;
    indicators.forEach((ind) => ind.classList.remove("active"));
    indicator.classList.add("active");
  });
});
