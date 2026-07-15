const slides = document.querySelectorAll(".slider img");

let index = 0;

function nextSlide() {
  slides[index].classList.remove("active");

  index++;

  if (index >= slides.length) {
    index = 0;
  }

  slides[index].classList.add("active");
}

setInterval(nextSlide, 3000);
