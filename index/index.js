let openMenuBtn = document.getElementById("openMenuBtn");
let closeMenuBtn = document.getElementById("closeMenuBtn");

let menu = document.querySelector(".menu");

let sliderDots = document.querySelectorAll(".slider-dots li");
let galleryList = document.querySelectorAll(".gallery-item");
let activeIndex = 0;

setupMenu();
setupGallery();
setUpGallerySliderDots();

function setupMenu() {
  openMenuBtn.onclick = () => {
    menu.style.right = "0px";
  };
  closeMenuBtn.onclick = () => {
    menu.style.right = "-225px";
  };
}

function setupGallery() {
  galleryList.forEach((element, index) => {
    element.onclick = () => {
      activeIndex = index;
      refreshGallery();
      refreshSliderDots()
    };
  });
}

function refreshGallery() {
  galleryList.forEach((element, index) => {
    if (activeIndex == index) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
}

function setUpGallerySliderDots() {
  sliderDots.forEach((dot, index) => {
    dot.onclick = () => {
      activeIndex = index;
      refreshGallery()
      refreshSliderDots();
    };
  });
}

function refreshSliderDots() {
  sliderDots.forEach((dot, index) => {
    if (activeIndex == index) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}
