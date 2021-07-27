$(document).ready(function () {
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

let menuButton = $('.menu-button');
menuButton.on('click', function () {
  $('.navbar-menu').toggleClass('navbar-menu--visible');
} );

let modalButton = $('[data-toggle=modal]');
let closeModalButton = $('.modal__close');
modalButton.on('click', openModal);
closeModalButton.on('click', closeModal);
$(".phone").mask("+7 (999) 999-99-99");

function openModal() {
        let targetModal = $(this).attr("data-href");
        $(targetModal).find('.modal__overlay').addClass('modal__overlay_visible');
        $(targetModal).find('.modal__dialog').addClass('modal__dialog_visible');
      };
    

function closeModal(event) {
        event.preventDefault(); 
        let modalOverlay = $('.modal__overlay');
        let modalDialog = $('.modal__dialog'); 
        modalOverlay.removeClass('modal__overlay_visible');
        modalDialog.removeClass('modal__dialog_visible');
      };

var KEYCODE_ESC = 27;

$(document).keyup(function(esc) {
  if (esc.keyCode === KEYCODE_ESC){
        let modalOverlay = $('.modal__overlay');
        let modalDialog = $('.modal__dialog'); 
        modalOverlay.removeClass('modal__overlay_visible');
        modalDialog.removeClass('modal__dialog_visible');
  };
});

// Обработка форм
  $('.form').each(function(){
    $(this).validate({
    errorClass: "invalid",
    messages: {
    name: {
      requared: "Please specify your name",
      minlength: "Name must not be shorter than 2 letters",
    },
    email: {
      required: "We need your email address to contact you",
      email: "Your email address must be in the format of name@domain.com"
    },
    phone: {
      required: "Phone is required",
      phone: "please enter your full phone number",
      minlength: "Enter full phone number",
    }
  }
  });
  });

AOS.init();
  
});
