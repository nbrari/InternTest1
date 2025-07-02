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

const cards = document.querySelectorAll(".carousel-card");
const cardWidth = cards[0].offsetWidth + 40;
const totalCards = cards.length;

let currentIndex = 0;

function updateScroll() {
  container.scrollTo({ left: currentIndex * cardWidth, behavior: "smooth" });
  updateScrollIndicator();
}

function updateScrollIndicator() {
  trackLines.forEach((line, i) => {
    line.classList.toggle("active", i === currentIndex);
  });
}

buttons[0].addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalCards) % totalCards;
  updateScroll();
});

buttons[1].addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalCards;
  updateScroll();
});

container.addEventListener("scroll", () => {
  const index = Math.round(container.scrollLeft / cardWidth);
  currentIndex = index;
  updateScrollIndicator();
});
const expertSwiper = new Swiper(".myExpertSwiper", {
  navigation: {
    nextEl: ".swiper-button-next-expert",
    prevEl: ".swiper-button-prev-expert",
  },
  loop: true,
});
