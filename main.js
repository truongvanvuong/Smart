// handle bars
const barsBtn = document.querySelector(".bars");
const overlay = document.querySelector(".overlay");
const nav = document.querySelector(".nav");
const navClose = document.querySelector(".nav_close");
let slides = document.getElementsByClassName("slider_img");
let dots = document.getElementsByClassName("dot");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const widthItem = document.querySelector(".about_card_item").offsetWidth;
const lengthList = document.querySelectorAll(".about_card_item").length;
const dost = document.querySelectorAll(".about_dot");

barsBtn.onclick = function () {
  nav.style.opacity = "1";
  overlay.style.display = "block";
  nav.style.transform = "translateX(0)";
};
navClose.onclick = function () {
  overlay.style.display = "none";
  nav.style.transform = "translateX(-100%)";
};
// handel slider
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

let currenindex = 0;

nextBtn.onclick = function () {
  const itemCard = document.querySelector(".wrap_card_about");
  itemCard.scrollLeft += widthItem * 4;
  currenindex++;
  if (currenindex > 0) {
    prevBtn.classList.remove("disbale");
  }
  if (currenindex == lengthList / 4) {
    nextBtn.classList.add("disbale");
  }
  for (i = 0; i < dost.length; i++) {
    dost[i].className = dost[i].className.replace("active", "");
  }
  dost[currenindex].className += " active";
};
prevBtn.onclick = function () {
  document.querySelector(".wrap_card_about").scrollLeft -= widthItem * 4;
  currenindex--;
  if (currenindex <= 0) {
    prevBtn.classList.add("disbale");
  }
  if (currenindex < lengthList) {
    nextBtn.classList.remove("disbale");
  }
  for (i = 0; i < dost.length; i++) {
    dost[i].className = dost[i].className.replace("active", "");
  }
  dost[currenindex].className += " active";
};
