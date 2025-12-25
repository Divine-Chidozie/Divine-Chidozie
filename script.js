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

// Enable DarkMode and Check Localstorage for saved data
const toggleButton = document.getElementById("toggle-btn");
toggleButton.addEventListener("click", () => {
  // Check localstorage on page load
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.toggle("dark-background");
  }

  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-background");
  });

  // Save the perference to LocalStorage
  // if (document.body.classList.contains("dark-background")) {
  //   localStorage.setItem("darkMode", "enabled");
  // } else {
  //   localStorage.setItem("darkMode", "disabled");
  // }
});

const year = document.getElementById("year");
year.textContent = new Date().getFullYear();
