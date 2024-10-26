let slideIndex = 1;
let slideInterval;
const intervalTime = 5000; 

function startSlideShow() {
  stopSlideShow(); 
  slideInterval = setInterval(() => moveSlide(1), intervalTime);
}

function stopSlideShow() {
  clearInterval(slideInterval);
}

function moveSlide(n) {
  showSlides(slideIndex += n);
  stopSlideShow(); 
  startSlideShow(); 
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  stopSlideShow(); 
  startSlideShow();
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carousel__item");
  let indicators = document.getElementsByClassName("indicator");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < indicators.length; i++) {
    indicators[i].className = indicators[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";  
  indicators[slideIndex-1].className += " active";
}

document.addEventListener('DOMContentLoaded', (event) => {
  showSlides(slideIndex);
  startSlideShow();
});
