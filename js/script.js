const navIcon = document.querySelector(".nav__icon");
const navigation = document.querySelector(".nav");
const closeIcon = document.querySelector(".close");
const cartIcon = document.querySelector(".cart-icon");
const cartDisplay = document.querySelector(".cart-display");
var images = [
  "../images/image-product-1.jpg",
  "../images/image-product-2.jpg",
  "../images/image-product-3.jpg",
  "../images/image-product-4.jpg",
];
var currentIndex = 0;

var currentImg = document.querySelector(".main-img");
var next = document.querySelector(".next");
var prev = document.querySelector(".previous");

const toggle = function (elem) {
  if (elem.style.visibility === "visible") {
    elem.style.visibility = "hidden";
  } else {
    elem.style.visibility = "visible";
  }
};

var incrementIndex = function () {
  currentIndex = currentIndex + 1;
  if (currentIndex > images.length - 1) {
    currentIndex = 0;
  }
  return currentIndex;
};

var decrementIndex = function () {
  currentIndex = currentIndex - 1;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  return currentIndex;
};

navIcon.addEventListener("click", () => toggle(navigation));

closeIcon.addEventListener("click", () => toggle(navigation));

cartIcon.addEventListener("click", () => toggle(cartDisplay));

next.addEventListener("click", function () {
  incrementIndex();
  currentImg.setAttribute("src", images[currentIndex]);
});

prev.onclick = function () {
  decrementIndex();
  currentImg.setAttribute("src", images[currentIndex]);
};

document.addEventListener("keydown", function (e) {
  if (e.key === ">") {
    incrementIndex();
    currentImg.setAttribute("src", images[currentIndex]);
  }
});
