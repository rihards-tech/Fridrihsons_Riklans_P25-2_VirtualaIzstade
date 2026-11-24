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