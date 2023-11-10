const navMenu = document.querySelector(".menu_items");
const navOpen = document.querySelector(".open-menu");
const navCloseMenu = document.querySelector(".close-menu");

navOpen.addEventListener("click", () => {
  navMenu.classList.toggle("nav_menu_visible");
})
navCloseMenu.addEventListener("click", () => {
  navMenu.classList.toggle("nav_menu_visible")
})
