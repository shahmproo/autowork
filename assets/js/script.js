'use strict';



/**
 * navbar toggle
 */

const navToggler = document.querySelector("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = () => {
  navToggler.classList.toggle("active");
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};

navToggler.addEventListener("click", toggleNav);
overlay.addEventListener("click", toggleNav);

// Close the navbar when a nav link is clicked
const navLinks = document.querySelectorAll(".navbar-link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navbar.classList.contains("active")) {
      toggleNav();
    }
  });
});

/**
 * header & go top btn active when window scroll down to 400px
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 400) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});
