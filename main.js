
const hamburger = document.getElementById("hamburger");
const navlist = document.getElementById("navlist");
const navLinks = document.querySelectorAll(".navlinks");

hamburger.addEventListener("click", () => {
  navlist.classList.toggle("navlist-active");
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navlist.classList.remove("navlist-active");
  });
});


var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});
