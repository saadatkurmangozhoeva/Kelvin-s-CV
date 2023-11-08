const nav = document.getElementById("nav");
const navBtn = document.getElementById("nav-btn");
const naVBtnImg = document.getElementById("nav-btn-img");

navBtn.onclick = () => {
  if (nav.classList.toggle("open")) {
    naVBtnImg.src = "./img/icons/nav-close.svg.svg";
  } else {
    naVBtnImg.src = "./img/icons/nav-open.svg.svg";
  }
};

AOS.init({
  once: true,
});
