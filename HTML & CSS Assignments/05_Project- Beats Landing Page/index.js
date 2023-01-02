const scrollButton = document.querySelector(".up-arrow-btn");
scrollButton.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

const togglebar = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navlist");

togglebar.addEventListener("click", () => {
  togglebar.classList.toggle("active");
  navMenu.classList.toggle("active");
});

