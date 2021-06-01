// ********************************* LOADER *********************************************
var loader = document.querySelector(".loader");

window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("loader-done");
}

// ********************************* LANDING *********************************************
var landing = document.querySelector(".landing");
var landingHeading = document.querySelector(".landing-heading");
var landingSubheading = document.querySelector(".landing-subheading");
var arrow = document.querySelector(".scrolldown-anim");
var navbar = document.querySelector(".navbar");

const tl = new TimelineMax();

// tl.fromTo(landing, 1, {height: "0vh"}, {height: "100vh", ease: Power2.easeInOut});

tl.fromTo(
  landingHeading,
  2,
  { opacity: 0 },
  { opacity: 1, ease: Power2.easeInOut }
)
  .fromTo(
    landingSubheading,
    1.5,
    { opacity: 0 },
    { opacity: 1, ease: Power2.easeInOut }
  )
  // .fromTo(navbar, 1.5, {opacity: 0}, {opacity: 1, ease: Power2.easeInOut})
  .fromTo(
    arrow,
    1.5,
    { opacity: 0 },
    { opacity: 1, ease: Power2.easeInOut },
    "-=1.5"
  );

// ********************************* BURGER *********************************************
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navbar = document.querySelector(".nav-links");
  const navItems = document.querySelectorAll(".nav-links li");
  const sdArrow = document.querySelector(".scrolldown-anim");

  burger.addEventListener("click", () => {
    //navbar toggle
    navbar.classList.toggle("nav-active");

    //navitems animation
    navItems.forEach((item, index) => {
      if (item.style.animation) {
        item.style.animation = "";
      } else {
        item.style.animation = `navItemFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });

    //burger animation
    burger.classList.toggle("toggle");

    //hiding the arrow scroll down animation
    sdArrow.classList.toggle("hide-sd");

    // auto toggle hamburger menu when any button clicked
    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        navbar.classList.remove("nav-active");
        burger.classList.remove("toggle");
        sdArrow.classList.remove("hide-sd");

        navItems.forEach((item) => {
          item.style.animation = "";
        });
      });
    });
  });
};

navSlide();

// ********************************* SKILLS BAR *********************************************
$(".skill-per").each(function () {
  var per = $(this).attr("per");
  $(this).css("width", per + "%");
});

// ********************************* SCROLL OBSERVER ********************************************

// FOR ABOUT PAGE
const faders = document.querySelectorAll(".fade-in");
const appearOptions = {
    threshold: 0.4
};

const showOnScroll = new IntersectionObserver(function (entries, showOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("show");
            showOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    showOnScroll.observe(fader);
});

// FOR PROJECTS PAGE
const sliders = document.querySelectorAll(".project");
const projectOptions = {
  threshold: 0,
  rootMargin: "0px 0px -200px 0px"   
};

const ProjectSlideIn = new IntersectionObserver(function (entries, showOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            showOnScroll.unobserve(entry.target);
        }
    });
}, projectOptions);


sliders.forEach(slider => {
  ProjectSlideIn.observe(slider);
});


// ********************************* COPY EMAIL BUTTON ********************************************
const emailButton = document.getElementById("copy-email");
emailButton.onclick = function() {
  const email = "chadha_raghav@outlook.com";
  window.prompt("reach me on this email address", email);
};


const emailButton1 = document.getElementById("copy-email-1");
emailButton1.onclick = function() {
  const email = "chadha_raghav@outlook.com";
  window.prompt("reach me on this email address", email);
};


const emailButton2 = document.getElementById("copy-email-2");
emailButton2.onclick = function() {
  const email = "chadha_raghav@outlook.com";
  window.prompt("reach me on this email address", email);
};
