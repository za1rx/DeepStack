const openBurgerButton = document.querySelector(".header__burger-menu");
const burgerMenu = document.querySelector(".burger-menu");
const closeBurgerButton = document.querySelector(".close-btn");

openBurgerButton.addEventListener("click", () => {
  burgerMenu.style.display = "block";
  setTimeout(() => {
    document.body.style.overflow = "hidden";
    burgerMenu.classList.add("burger-menu--active");
  }, 0);
});

closeBurgerButton.addEventListener("click", () => {
  document.body.style.overflow = "";
  burgerMenu.classList.remove("burger-menu--active");
  setTimeout(() => {
    burgerMenu.style.display = 'none'
  }, 800)
});
