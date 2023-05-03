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
