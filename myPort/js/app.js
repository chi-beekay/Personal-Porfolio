// Menu Show Tags
var navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

navToggle.addEventListener("click", () => {
  navMenu.classList.add("show-menu");
});

navClose.addEventListener("click", () => {
  navMenu.classList.remove("show-menu");
});

// Remove Menu Mobile
const navLinks = document.querySelectorAll(".nav-link");

// function for removing menu when clicked on
navLinks.forEach((navLink) =>
  navLink.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  })
);

//Swiper

var mySwiper = new Swiper(".swiper-container", {
  effect: "",
  loop: false,
  speed: 800,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: "true",
  },
});

//transitions
var btnNext = document.querySelector(".swiper-button-next"),
  btnPrev = document.querySelector(".swiper-button-prev"),
  sliderText = document.querySelectorAll(".slide-text"),
  sliderNumber = document.querySelectorAll(".swiper-slide .number");

btnNext.addEventListener("click", transitionSlideNext);
btnPrev.addEventListener("click", transitionSlidePrev);

function transitionSlideNext() {
  var slideActiveText = document.querySelector(
      ".swiper-slide-active .slide-text"
    ),
    slidePrevText = document.querySelector(".swiper-slide-prev .slide-text");

  slidePrevText.classList.remove("playText");
  slideActiveText.classList.add("playText");
}

function transitionSlidePrev() {
  var slideActiveText = document.querySelector(
      ".swiper-slide-active .slide-text"
    ),
    slideNextText = document.querySelector(".swiper-slide-next .slide-text");

  slideNextText.classList.remove("playText");
  slideActiveText.classList.add("playText");
}

// Skew Scroll Top

// function scrollUp() {
//   const scrollUp = document.getElementById("scroll-up");
//   if (this.scrollV >= 200) scrollUp.classList.add("show-scroll");
//   else scrollUp.classList.remove("show-scroll");
// }

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

// Change background header
function scrollHeader() {
  const nav = document.getElementById("header");
  //
  if (this.scrollY >= 80) {
    nav.classList.add("scroll-header");
    // console.log("header");
  } else {
    nav.classList.remove("scroll-header");
    // console.log("remove");
  }
}

window.addEventListener("scroll", scrollHeader);

// Show Scroll Up
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 200) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
}

window.addEventListener("scroll", scrollUp);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// scroll reveal animation

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true
});

sr.reveal(`.home-data`);
sr.reveal(`.home-img`, { delay: 500 });
sr.reveal(`.home-social`, { delay: 600 });
sr.reveal(`.about-img`, { origin: "left" });
sr.reveal(`.about-description`, { origin: "right", delay: 400 });
sr.reveal(`.about-description-text`, { origin: "right", delay: 700 });
sr.reveal(`.about-button`, { origin: "right", delay: 1000 });
sr.reveal(`.swiper-wrapper`, { origin: "bottom" });
sr.reveal(`.contact-description`, { origin: "left", delay: 400 });
sr.reveal(`.contact-socials`, { origin: "left", delay: 700 });
sr.reveal(`.contact-social-links`, { origin: "left" });
sr.reveal(`.contact-img`, { origin: "right" });
