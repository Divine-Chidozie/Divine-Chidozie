const downloadButton = document.getElementById("download-btn");
const navHeader = document.getElementById("nav-header");
const navLogo = document.querySelector(".logo");
const navListItems = document.querySelectorAll(".nav-list-items");
const menu = document.getElementById("menu");
const menuSpan = document.querySelectorAll(".menu-span");
const mobileMenu = document.getElementById("mobileMenu");
const toggleButton = document.querySelector("#toggle-btn");
const workTogetherButton = document.getElementById("work-together-btn");

// ===== Skill Heading for skill page =====
const skillHeading = document.getElementById("skill-heading");

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
    // toggleButton.style.fill = "green";
    toggleButton.style.fill = "#8200db";
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

// downloadButton.addEventListener("click", function (event) {
//   event.preventDefault();
//   alert("Download CV button clicked");
// });

// downloadButton.onclick = function () {
//   alert("Hello World from the download button");
// };

// ===== Dark Mode =====

// Apply saved theme on page load
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.toggle("dark-background");
  skillHeading.style.color = "white";
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

const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameErrorEl = document.getElementById("name-error");
const emailErrorEl = document.getElementById("email-error");
const messageErrorEl = document.getElementById("textarea-error");

const validateForm = ({ name, email, message }) => {
  const nameErrors = [];
  const emailErrors = [];
  const messageErrors = [];

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name.trim()) {
    nameErrors.push("Please enter your name");
  }

  if (!email.trim()) {
    emailErrors.push("Please enter your email");
  } else if (!emailPattern.test(email)) {
    emailErrors.push("Please enter a valid email address");
  }

  if (!message.trim()) {
    messageErrors.push("Please enter your message");
  } else if (message.trim().length < 10) {
    messageErrors.push("Message must be more than 10 characters long");
  }

  return {
    isValid:
      nameErrors.length === 0 &&
      emailErrors.length === 0 &&
      messageErrors.length === 0,
    nameErrors,
    emailErrors,
    messageErrors,
  };
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Clear old errors
  nameErrorEl.textContent = "";
  emailErrorEl.textContent = "";
  messageErrorEl.textContent = "";

  const result = validateForm({
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  });

  if (!result.isValid) {
    nameErrorEl.textContent = result.nameErrors.join(", ");
    emailErrorEl.textContent = result.emailErrors.join(",");
    messageErrorEl.textContent = result.messageErrors.join(", ");
    return;
  }

  console.log("From submitted successfully");
});

// Clear inputs on typing....
function clearNameInput() {
  nameErrorEl.textContent = "";
}
function clearEmailInput() {
  emailErrorEl.textContent = "";
}
function clearMessageInput() {
  messageErrorEl.textContent = "";
}
nameInput.addEventListener("input", clearNameInput);
emailInput.addEventListener("input", clearEmailInput);
messageInput.addEventListener("input", clearMessageInput);

workTogetherButton.onclick = function (e) {
  e.preventDefault();
  form.scrollIntoView({ behavior: "smooth" });
};

const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

const text = "A Frontend Developer";
let i = 0;
const roleEl = document.querySelector(".hero-role");

function type() {
  if (i < text.length) {
    document.querySelector(".hero-role").textContent += text.charAt(i);
    i++;
    setTimeout(type, 100);
  }
}

roleEl.textContent = "";
type();
