// Header scroll effect
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Menu toggle buttons
const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");

[openMenuBtn, closeMenuBtn].forEach((arrow) => {
  arrow.addEventListener("click", () => {
    menu.classList.toggle("open");
    if (menu.classList.contains("open")) {
      openMenuBtn.style.display = "none";
      closeMenuBtn.style.display = "block";
    } else {
      openMenuBtn.style.display = "block";
      closeMenuBtn.style.display = "none";
    }
  });
});

// Scroll spy effect
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu ul li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });

  // Close menu on scroll
  if (menu.classList.contains("open")) {
    menu.classList.remove("open");
    openMenuBtn.style.display = "block";
    closeMenuBtn.style.display = "none";
  }
});

// Close menu when nav link is clicked
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
    openMenuBtn.style.display = "block";
    closeMenuBtn.style.display = "none";
  });
});
