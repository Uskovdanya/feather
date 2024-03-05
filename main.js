/* eslint-disable no-undef */
/* eslint-disable strict */

("use strict");
const burger = document.querySelector("#burger");
const navMobile = document.querySelector("#mobile");
const body = document.querySelector("body");

burger.addEventListener("click", function () {
  burger.classList.toggle("active");
  navMobile.classList.toggle("hidden");
  navMobile.classList.toggle("flex");
  body.classList.toggle("overflow-hidden");
});

window.addEventListener("resize", function (e) {
  navMobile.classList.add("hidden");
  navMobile.classList.remove("flex");
  burger.classList.remove("active");
  body.classList.remove("overflow-hidden");
});

const swiper = new Swiper(".swiper", {
  mousewheel: true,
  slidesPerView: 1.4,
  spaceBetween: 32,
  breakpoints: {
    // when window width is >= 480px
    600: {
      slidesPerView: 1.9,
    },
    800: {
      slidesPerView: 2.4,
    },
    1100: {
      slidesPerView: 2.9,
    },
  },
});

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

// Whenever the user explicitly chooses light mode
localStorage.theme = "light";

// Whenever the user explicitly chooses dark mode
localStorage.theme = "dark";

// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem("theme");
