

const hotelSwiper = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,



  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

});

const reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,



  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

});

var menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', function () {
  document.querySelector('.navbar-menu').classList.toggle('navbar-menu--visible');
} );