const btnFeatures = document.querySelector(".features");
const btnCompany = document.querySelector(".company");

const featureArrow = document.querySelector(".features-arrow");
const companyArrow = document.querySelector(".company-arrow");

const listFeatures = document.querySelector(".list-features");
const listCompany = document.querySelector(".list-company");

const btnHiddenMenu = document.querySelector(".icon-menu-close");
const btnShowMenu = document.querySelector(".icon-menu");
const boxMenu = document.querySelector(".box-menu");

let featuresOpen = false;
let companyOpen = false;

function toogleArrow(e) {
  if (featuresOpen) return;
  if (companyOpen) return;
  const featureArrowSrc = featureArrow.getAttribute("src");
  const companyArrowSrc = companyArrow.getAttribute("src");
  if (
    featureArrowSrc === "./assets/images/icon-arrow-down.svg" &&
    e.target === btnFeatures
  ) {
    featureArrow.src = "./assets/images/icon-arrow-up.svg";
  }
  if (
    companyArrowSrc === "./assets/images/icon-arrow-down.svg" &&
    e.target === btnCompany
  ) {
    companyArrow.src = "./assets/images/icon-arrow-up.svg";
  }
  if (featureArrowSrc === "./assets/images/icon-arrow-up.svg") {
    featureArrow.src = "./assets/images/icon-arrow-down.svg";
  }
  if (companyArrowSrc === "./assets/images/icon-arrow-up.svg") {
    companyArrow.src = "./assets/images/icon-arrow-down.svg";
  }
}

btnFeatures.addEventListener("mouseenter", (event) => {
  toogleArrow(event);
});
btnFeatures.addEventListener("mouseleave", (event) => {
  toogleArrow(event);
});

btnCompany.addEventListener("mouseenter", (event) => {
  toogleArrow(event);
});
btnCompany.addEventListener("mouseleave", (event) => {
  toogleArrow(event);
});

const mq = window.matchMedia("(max-width: 376px)");

btnFeatures.addEventListener("click", () => {
  featuresOpen = !featuresOpen;
  if (featuresOpen) {
    listFeatures.style.display = "flex";
    featureArrow.src = "./assets/images/icon-arrow-up.svg";
    if (mq.matches) {
      btnFeatures.style.paddingBottom = "18.2rem";
    }
  } else {
    listFeatures.style.removeProperty("display");
    featureArrow.src = "./assets/images/icon-arrow-down.svg";
    if (mq.matches) {
      btnFeatures.style.removeProperty("padding-bottom");
    }
  }
});

btnCompany.addEventListener("click", () => {
  companyOpen = !companyOpen;
  if (companyOpen) {
    listCompany.style.display = "flex";
    companyArrow.src = "./assets/images/icon-arrow-up.svg";

    if (mq.matches) {
      btnCompany.style.paddingBottom = "13rem";
    }
  } else {
    listCompany.style.removeProperty("display");
    companyArrow.src = "./assets/images/icon-arrow-down.svg";
    if (mq.matches) {
      btnCompany.style.removeProperty("padding-bottom");
    }
  }
});

btnShowMenu.addEventListener("click", () => {
  boxMenu.style.display = "flex";
});

btnHiddenMenu.addEventListener("click", () => {
  boxMenu.style.display = "none";
  setTimeout(() => {
    boxMenu.style.removeProperty("display");
  }, 10);
});