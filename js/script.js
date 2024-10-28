import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
    duration: 1000,
    offset: 100,
});

// JavaScript to toggle the mobile menu
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("mobile-menu-icon");
    const mobileMenu = document.getElementById("mobile-menu");
  
    menuIcon.addEventListener("click", function () {
      mobileMenu.classList.toggle("show"); // Toggle the 'show' class on the mobile menu
    });
  });