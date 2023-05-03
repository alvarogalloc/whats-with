window.onscroll = function () {
  let element = document.querySelector("#nav-activate");
  let navbar = document.querySelector("nav");
  if (window.scrollY > element.offsetTop + element.offsetHeight) {
    navbar.classList.add("nav-shadow");
  }
  // remove shadow
  if (window.scrollY < element.offsetTop + element.offsetHeight) {
    navbar.classList.remove("nav-shadow");
  }
};
function openOverlay() {
    let overlay = document.querySelector(".overlay");
    overlay.classList.add("overlay-active");
    let body = document.querySelector("body");
    body.classList.add("no-scroll");
}
function closeOverlay() {
    let overlay = document.querySelector(".overlay");
    overlay.classList.remove("overlay-active");
    let body = document.querySelector("body");
    body.classList.remove("no-scroll");
}