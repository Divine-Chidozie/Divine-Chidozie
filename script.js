const getInTouch = document.getElementById("getInTouch");
const downloadButton = document.getElementById("download-btn");
const navHeader = document.getElementById("nav-header");
const navLogo = document.querySelector(".logo");
const navListItems = document.querySelectorAll(".nav-list-items");
const menu = document.getElementById("menu");
const mobileMenu = document.getElementById("mobileMenu");

const navHeaderBackground = `#9318fa`;
const backgroundTransition = "0.3s ease-in";
const newNavLogo = "white";
function navHeaderScroll() {
  if (window.scrollY > 50) {
    navHeader.style.backgroundColor = `${navHeaderBackground}`;
    navHeader.style.transition = `${backgroundTransition}`;
    navLogo.style.color = newNavLogo;
  } else {
    navHeader.style.backgroundColor = "";
    navLogo.style.color = "#0000EE";
  }
}
window.addEventListener("scroll", navHeaderScroll);

menu.addEventListener("click", function () {
  mobileMenu.classList.toggle("active");
});

getInTouch.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Get in Touch Button clicked..");
});

downloadButton.addEventListener("click", function (event) {
  event.preventDefault();
  alert("Download CV button clicked");
});

// ===== Dark Mode =====
const toggleButton = document.querySelector("#toggle-btn");

// Apply saved theme on page load
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.toggle("dark-background");
}

// Toggle dark mode on button click
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-background");
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

const aboutPara = document.getElementById("about-para");
const educationPara = document.getElementById("education-para");
const skillsPara = document.getElementById("skills-para");

educationLink.addEventListener("click", () => {
  aboutPara.style.display = "none";
  educationPara.style.display = "block";
});

myselfLink.addEventListener("click", () => {
  aboutPara.style.display = "block";
  educationPara.style.display = "none";
});

skillsLink.addEventListener("click", () => {
  aboutPara.style.display = "none";
  educationPara.style.display = "none";
  skillsPara.style.display = "flex";
});

const year = document.getElementById("year");
year.textContent = new Date().getFullYear();
