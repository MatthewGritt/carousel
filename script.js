const slides = Array.from(document.querySelectorAll(".slide"));
const buttons = document.querySelectorAll(".buttons div");

let next, prev;

function getNextPrev() {
  const activeSlide = document.querySelector(".active");
  const activeIndex = slides.indexOf(activeSlide);
  if (activeIndex === slides.length - 1) next = slides[0];
  else next = slides[activeIndex + 1];
  if (activeIndex === 0) prev = slides[slides.length - 1];
  else prev = slides[activeIndex - 1];
  return [next, prev];
}

function getPosition() {
  const activeSlide = document.querySelector(".active");
  [next, prev] = getNextPrev();
  activeSlide.style.transform = "translateX(0)";
  next.style.transform = "translateX(100%)";
  prev.style.transform = "translateX(-100%)";
  slides.forEach((slide) => {
    slide.addEventListener("transitionend", () => {
      slide.classList.remove("move");
    });
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("next")) nextSlide();
    if (button.classList.contains("prev")) prevSlide();
  });
});

function nextSlide() {
  const activeSlide = document.querySelector(".active");
  [next, prev] = getNextPrev();
  if (activeSlide.classList.contains("move")) return;
  activeSlide.classList.remove("active");
  activeSlide.classList.add("move");
  next.classList.add("active");
  next.classList.add("move");
  getPosition();
}

function prevSlide() {
  const activeSlide = document.querySelector(".active");
  [next, prev] = getNextPrev();
  if (activeSlide.classList.contains("move")) return;
  activeSlide.classList.remove("active");
  activeSlide.classList.add("move");
  prev.classList.add("active");
  prev.classList.add("move");
  getPosition();
}

getPosition();
