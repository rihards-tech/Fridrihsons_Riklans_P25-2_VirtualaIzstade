// ===== MOBILĀ NAVIGĀCIJA =====

const menuToggle = document.querySelector(".header__toggle");
const menuNav = document.querySelector(".header__nav");
const menuLinks = document.querySelectorAll(".header__link");

function closeMenu() {
  menuToggle.classList.remove("is-open");
  menuNav.classList.remove("is-open");

  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Atvērt navigāciju");
}

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.classList.toggle("is-open");

  menuNav.classList.toggle("is-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Aizvērt navigāciju" : "Atvērt navigāciju"
  );
});

menuLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

let acc = document.getElementsByClassName("gallery__accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// ===== KOMPONISTU KARUSELIS =====

const composers = [
  {
    name: "Džovanni Pjerluidži da Palestrīna",
    period: "ap 1525–1594 · Renesanse",
    image: "images/palestrina.jpg"
  },
  {
    name: "Johans Sebastiāns Bahs",
    period: "1685–1750 · Baroks",
    image: "images/bach.jpg"
  },
  {
    name: "Volfgangs Amadejs Mocarts",
    period: "1756–1791 · Klasicisms",
    image: "images/mozart.jpg"
  },
  {
    name: "Frideriks Šopēns",
    period: "1810–1849 · Romantisms",
    image: "images/chopin.jpg"
  },
  {
    name: "Igors Stravinskis",
    period: "1882–1971 · Modernisms",
    image: "images/stravinsky.jpg"
  }
];

const carouselImage = document.querySelector(".carousel__image");
const carouselName = document.querySelector(".carousel__name");
const carouselPeriod = document.querySelector(".carousel__period");

const prevButton = document.querySelector(".carousel__arrow--prev");
const nextButton = document.querySelector(".carousel__arrow--next");

let currentIndex = 0;

function showComposer() {
  const composer = composers[currentIndex];

  carouselImage.src = composer.image;
  carouselImage.alt = composer.name;

  carouselName.textContent = composer.name;
  carouselPeriod.textContent = composer.period;
}

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % composers.length;
  showComposer();

  if (isPlaying) {
    startAutoplay();
  }
});

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + composers.length) % composers.length;
  showComposer();

  if (isPlaying) {
    startAutoplay();
  }
});


// ===== AUTOMĀTISKĀ PĀRSLĒGŠANA =====

const autoplayButton = document.querySelector(".carousel__autoplay");

let intervalId = null;
let isPlaying = true;

function startAutoplay() {
  clearInterval(intervalId);

  intervalId = setInterval(() => {
    currentIndex = (currentIndex + 1) % composers.length;
    showComposer();
  }, 4000);
}

function stopAutoplay() {
  clearInterval(intervalId);
  intervalId = null;
}

autoplayButton.addEventListener("click", () => {
  isPlaying = !isPlaying;

  if (isPlaying) {
    startAutoplay();
    autoplayButton.textContent = "Apturēt pārslēgšanu";
  } else {
    stopAutoplay();
    autoplayButton.textContent = "Atsākt pārslēgšanu";
  }
});

startAutoplay();