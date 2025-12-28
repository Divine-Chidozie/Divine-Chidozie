// const { response } = require("express");

const downloadButton = document.getElementById("download-btn");
const navHeader = document.getElementById("nav-header");
const navLogo = document.querySelector(".logo");
const navListItems = document.querySelectorAll(".nav-list-items");
const menu = document.getElementById("menu");
const menuSpan = document.querySelectorAll(".menu-span");
const mobileMenu = document.getElementById("mobileMenu");
const toggleButton = document.querySelector("#toggle-btn");

const navHeaderBackground = `#9318fa`;
const backgroundTransition = "0.3s ease-in";
const generalColor = "white";

function navHeaderScroll() {
  if (window.scrollY > 50) {
    navHeader.style.backgroundColor = navHeaderBackground;
    navHeader.style.transition = backgroundTransition;
    navLogo.style.color = generalColor;
    toggleButton.style.fill = generalColor;
    navListItems.forEach((item) => {
      item.style.color = "white";
    });
    menuSpan.forEach((span) => {
      span.style.backgroundColor = generalColor;
    });
  } else {
    navHeader.style.backgroundColor = "";
    navLogo.style.color = "#0000EE";
    toggleButton.style.fill = "black";
    navListItems.forEach((item) => {
      item.style.color = "";
    });
    menuSpan.forEach((span) => {
      span.style.backgroundColor = "";
    });
  }
}
window.addEventListener("scroll", navHeaderScroll);

// ===== Menu button toggle class =====
menu.addEventListener("click", function () {
  mobileMenu.classList.toggle("active");
});

downloadButton.addEventListener("click", function (event) {
  event.preventDefault();
  alert("Download CV button clicked");
});

// ===== Dark Mode =====

// Apply saved theme on page load
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.toggle("dark-background");
}
// Toggle dark mode on button click
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-background");
  if (document.body.classList.contains("dark-background")) {
    toggleButton.style.fill = "white";
    document.getElementById("email-link").style.color = "white";
  } else {
    toggleButton.style.fill = "";
    document.getElementById("email-link").style.color = "";
  }
});
// Save the preference
if (document.body.classList.contains("dark-background")) {
  localStorage.setItem("darkMode", "enabled");
} else {
  localStorage.setItem("darkMode", "disabled");
}

// ===== About paragragph switching =====
const myselfLink = document.getElementById("myself-link");
const educationLink = document.getElementById("education-link");
const skillsLink = document.getElementById("skills-link");

// const allLinks = [myselfLink, educationLink, skillsLink];

const aboutPara = document.getElementById("about-para");
const educationPara = document.getElementById("education-para");

function allLinks() {
  educationLink.onclick = function () {
    aboutPara.style.display = "none";
    educationPara.style.display = "block";
  };

  myselfLink.onclick = function () {
    educationPara.style.display = "none";
    aboutPara.style.display = "block";
  };
}
allLinks();

const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const validateForm = ({ name, email, message }) => {
  const error = [];
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name.trim()) {
    error.push("Please enter your name");
  }

  if (!email.trim()) {
    error.push("Please enter your email address");
  } else if (!emailPattern.test(email)) {
    error.push("Please enter a valid email address");
  }

  if (!message.trim()) {
    error.push("Please enter your message");
  } else if (message.trim().length < 10) {
    error.push("Your message must be atleast 10 characters long");
  }
  return {
    isValid: error.length === 0,
    error,
  };
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const result = validateForm({
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  });

  if (!result.isValid) {
    result.error.forEach((error) => console.warn(error));
    return;
  }

  console.log("From submitted successfully");
});
