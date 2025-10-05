const swiper = new Swiper(".reviews__slider", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 4,
  spaceBetween: 20,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    320: {
        slidesPerView: 1,
    },
    750: {
        slidesPerView: 2,
    },
    1100: {
        slidesPerView: 3,
    },
    1650: {
        slidesPerView: 4,
    }
  }
});
