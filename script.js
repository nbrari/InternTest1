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
const swiper = new Swiper(".mySwiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const container = document.querySelector(".carousel-container");
const buttons = document.querySelectorAll(".carousel-controls button");
const trackLines = document.querySelectorAll(".scroll-line");

let scrollAmount = 0;
const cardWidth = 439 + 40;

function updateScrollIndicator() {
  const scrollLeft = container.scrollLeft;
  const maxScroll = container.scrollWidth - container.clientWidth;
  const index = Math.round((scrollLeft / maxScroll) * (trackLines.length - 1));

  trackLines.forEach((line, i) => {
    line.classList.toggle("active", i === index);
  });
}

buttons[0].addEventListener("click", () => {
  scrollAmount = Math.max(0, scrollAmount - cardWidth);
  container.scrollTo({ left: scrollAmount, behavior: "smooth" });
  setTimeout(updateScrollIndicator, 300);
});

buttons[1].addEventListener("click", () => {
  const maxScroll = container.scrollWidth - container.clientWidth;
  scrollAmount = Math.min(maxScroll, scrollAmount + cardWidth);
  container.scrollTo({ left: scrollAmount, behavior: "smooth" });
  setTimeout(updateScrollIndicator, 300);
});
container.addEventListener("scroll", updateScrollIndicator);
