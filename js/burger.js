const openBurgerButton = document.querySelector('.header__burger-menu');
const burgerMenu = document.querySelector('.burger-menu');
const closeBurgerButton = document.querySelector('.close-btn');

openBurgerButton.addEventListener('click', () => {   
    document.body.style.overflow = 'hidden'
    burgerMenu.classList.add('burger-menu--active')
})

closeBurgerButton.addEventListener('click', () => {
    document.body.style.overflow = '';
    burgerMenu.classList.remove('burger-menu--active');
})