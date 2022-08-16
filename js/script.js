// Create a media condition that targets viewports at least 768px wide
const mediaQueryTablets = window.matchMedia("(min-width: 900px)");
//variables to enable hidden parts show
const navIcon = document.querySelector(".nav__icon");
const navigation = document.querySelector(".nav");
const closeIcon = document.querySelectorAll(".close");
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

let currentImg = document.querySelectorAll(".main-img");
let next = document.querySelectorAll(".next");
let prev = document.querySelectorAll(".previous");

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

next.forEach((btn) =>
  btn.addEventListener("click", function () {
    incrementIndex();
    // currentImg.setAttribute("src", images[currentIndex]);
    currentImg.forEach((img) => img.setAttribute("src", images[currentIndex]));
  })
);

prev.forEach((btn) =>
  btn.addEventListener("click", function () {
    decrementIndex();
    // currentImg.setAttribute("src", images[currentIndex]);
    currentImg.forEach((img) => img.setAttribute("src", images[currentIndex]));
  })
);

// prev.onclick = function () {
//   decrementIndex();
//   currentImg.setAttribute("src", images[currentIndex]);
// };

//functions to display and hide the navbar and cart
navIcon.addEventListener("click", function () {
  toggle(navigation);
  overlay.classList.remove("hidden");
});

closeIcon.forEach((icon) =>
  icon.addEventListener("click", function () {
    toggle(navigation);
    overlay.classList.add("hidden");
    modalProductView.classList.add("hidden");
  })
);

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

//delete items and checkout
const deleteIcon = document.querySelector(".trash-items");
const checkoutButton = document.querySelector(".checkout-button");

deleteIcon.addEventListener("click", function () {
  emptyCartText.style.display = "flex";
  updatedCartDetailsContainer.style.display = "none";
  cartNotification.style.visibility = "hidden";
  numberBox.value = "0";
});

checkoutButton.addEventListener("click", function () {
  toggle(cartDisplay);
  cartNotification.style.visibility = "hidden";
  numberBox.value = "0";
});

//functions to change the images on laptops
const allImagesContainer = document.querySelectorAll(".all-imgs__container");
const allImages = document.querySelectorAll(".all-pictures");
allImagesContainer.forEach((cont) =>
  cont.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.classList.contains("all-pictures")) {
      allImages.forEach((img) => img.classList.remove("active"));
      e.target.classList.add("active");
      const clicked = e.target.dataset.tab;
      currentImg.forEach((img) =>
        img.setAttribute("src", `../images/image-product-${clicked}.jpg`)
      );
      // currentImg.setAttribute("src", `../images/image-product-${clicked}.jpg`);
    }
  })
);
// allImagesContainer.addEventListener("click", function (e) {
//   e.preventDefault();
//   if (e.target.classList.contains("all-pictures")) {
//     allImages.forEach((img) => img.classList.remove("active"));
//     e.target.classList.add("active");
//     const clicked = e.target.dataset.tab;
//     currentImg.setAttribute("src", `../images/image-product-${clicked}.jpg`);
//   }
// });

//modal display on huge screens
const modalProductView = document.querySelector(".modal-product-view");

// Check if the media query is true
if (mediaQueryTablets.matches) {
  // Then trigger an alert
  console.log("Media Query Matched!");
  currentImg.forEach((img) =>
    img.addEventListener("click", function () {
      overlay.classList.remove("hidden");
      overlay.classList.add("overlay-blur");

      modalProductView.classList.remove("hidden");
      modalProductView.classList.add("modal");
    })
  );
}

if (!mediaQueryTablets.matches) {
  // Then trigger an alert
  console.log("Media Query not Matched!");
}
