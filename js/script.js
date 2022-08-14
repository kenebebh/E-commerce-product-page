//variables to enable hidden parts show
const navIcon = document.querySelector(".nav__icon");
const navigation = document.querySelector(".nav");
const closeIcon = document.querySelector(".close");
const cartIcon = document.querySelector(".cart-icon");
const cartDisplay = document.querySelector(".cart-display");
const overlay = document.querySelector(".overlay");

//variables to make the images scroll
var images = [
  "../images/image-product-1.jpg",
  "../images/image-product-2.jpg",
  "../images/image-product-3.jpg",
  "../images/image-product-4.jpg",
];
let currentIndex = 0;

let currentImg = document.querySelector(".main-img");
let next = document.querySelector(".next");
let prev = document.querySelector(".previous");

//variables for incrementing and decrementing number of items
const plus = document.querySelector(".add");
const minus = document.querySelector(".minus");
const numberBox = document.querySelector(".number");

//toggling functions
const toggle = function (elem) {
  if (elem.style.visibility === "visible") {
    elem.style.visibility = "hidden";
  } else {
    elem.style.visibility = "visible";
  }
};

const setDisplay = function (elem) {
  if (elem.style.display === "flex") {
    elem.style.display = "none";
  } else {
    elem.style.visibility = "flex";
  }
};

//these make the pictures change
let incrementIndex = function () {
  currentIndex = currentIndex + 1;
  if (currentIndex > images.length - 1) {
    currentIndex = 0;
  }
  return currentIndex;
};

let decrementIndex = function () {
  currentIndex = currentIndex - 1;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  return currentIndex;
};

next.addEventListener("click", function () {
  incrementIndex();
  currentImg.setAttribute("src", images[currentIndex]);
});

prev.onclick = function () {
  decrementIndex();
  currentImg.setAttribute("src", images[currentIndex]);
};

//functions to display and hide the navbar and cart
navIcon.addEventListener("click", function () {
  toggle(navigation);
  overlay.classList.remove("hidden");
});

closeIcon.addEventListener("click", function () {
  toggle(navigation);
  overlay.classList.add("hidden");
});

cartIcon.addEventListener("click", () => toggle(cartDisplay));

// document.addEventListener("keydown", function (e) {
//   if (e.key === ">") {
//     console.log(e.key);
//     incrementIndex();
//     currentImg.setAttribute("src", images[currentIndex]);
//   }
// });

//functions to increment number of items to be added to the cart
const incrementValue = function () {
  var value = parseInt(document.getElementById("number").value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById("number").value = value;
};

const decrementValue = function () {
  var value = parseInt(document.getElementById("number").value, 10);
  if (value >= 1) {
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById("number").value = value;
  }
};

plus.addEventListener("click", () => incrementValue());

minus.addEventListener("click", () => decrementValue());

numberBox.addEventListener("click", function () {
  numberBox.value = "";
});

//Adding number of items to cart and displaying it in the cart
const addToCartButton = document.querySelector(".add-to-cart");
const cartNotification = document.querySelector(".cart-notification");
const quantity = document.querySelector(".quantity");
const finalPrice = document.querySelector(".cart__total-price-value");
const emptyCartText = document.querySelector(".empty-cart-text");
const updatedCartDetailsContainer = document.querySelector(".cart-items");

const calcPrice = function () {
  const priceToPay = numberBox.value * 125;
  finalPrice.innerHTML = priceToPay;
};

addToCartButton.addEventListener("click", function () {
  if (numberBox.value > 0) {
    cartNotification.innerHTML = `${numberBox.value}`;
    quantity.innerHTML = `${numberBox.value}`;
    calcPrice();
    emptyCartText.style.display = "none";
    updatedCartDetailsContainer.style.display = "flex";
    cartNotification.style.visibility = "visible";
  }
});
