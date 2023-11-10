/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

const next = document.querySelector('.arrow-right');
const previous = document.querySelector('.arrow-left');
const slides = [...document.querySelectorAll('.slide')];
const activeSlide = document.querySelector('.slide.active');
let activeSlideIndex = slides.indexOf(activeSlide);

console.log(activeSlideIndex)

next.addEventListener('click', () => {
  slides[activeSlideIndex].classList.remove('active');
  slides[activeSlideIndex + 1].classList.add('active');
  activeSlideIndex += 1;
  console.log(activeSlideIndex)
});


previous.addEventListener('click', () => {
  slides[activeSlideIndex].classList.remove('active');
  slides[activeSlideIndex - 1].classList.add('active');
  activeSlideIndex -= 1;
  console.log(activeSlideIndex)
});
