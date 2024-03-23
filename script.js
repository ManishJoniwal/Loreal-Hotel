const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".nav-link li a", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header-text h1", {
  ...scrollRevealOption,
  delay: 500,
});

// about container
ScrollReveal().reveal(".about-img img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about-heading", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about-text .sec-h1", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about-text .about-para", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about-btn", {
  ...scrollRevealOption,
  delay: 2000,
});

// room container
ScrollReveal().reveal(".card", {
  ...scrollRevealOption,
  interval: 500,
});

// service container
ScrollReveal().reveal(".list-container .list-s .ul-list", {
  ...scrollRevealOption,
  interval: 500,
  origin: "right",
});



function go() {
  let nav = document.getElementById("second-nav")
  // nav.style.display = "block"
  if (nav.style.top != "56px") {
    nav.style.top = "56px"
  }
  else {
    nav.style.top = "-350px"
  }
}