const btnFeatures = document.querySelector(".features");
const btnCompany = document.querySelector(".company");

const featureArrow = document.querySelector(".features-arrow");
console.log(featureArrow);
const companyArrow = document.querySelector(".company-arrow");

const listFeatures = document.querySelector(".list-features");
const listCompany = document.querySelector(".list-company");

const btnHiddenMenu = document.querySelector(".icon-menu-close");
const boxMenu = document.querySelector(".box-menu");

function toogleArrow(e) {
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

btnHiddenMenu.addEventListener("click", () => {
  boxMenu.style.display = "none";
  setTimeout(() => {
    boxMenu.style.removeProperty("display");
  }, 1000);
});
