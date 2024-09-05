const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slide").length;
let currentSlide = 0;

document.querySelector(".next").addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
});
document.querySelector(".back").addEventListener("click", () => {
  currentSlide = (currentSlide - 1) % totalSlides;
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
});
