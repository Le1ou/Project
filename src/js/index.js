import '../scss/style.scss'

const burgerButton = document.querySelector('.header__left-button');
const burgerMenu = document.querySelector('.burger');
const burgerCancelButton = document.querySelector('.burger-top__left-button');

burgerButton.addEventListener('click', function() {
  burgerMenu.classList.toggle('burger--open');
});

burgerCancelButton.addEventListener('click', function() {
  burgerMenu.classList.remove('burger--open');
});

const menuCallButtonHeader = document.querySelector('.header__call');
const menuCallButtonBurger = document.querySelector('.burger__call');
const menuCall = document.querySelector('.menu-call');
const menuCallCancelButton = document.querySelector('.menu-call__btn');

menuCallButtonHeader.addEventListener('click', function() {
  menuCall.classList.toggle('menu-call--open');
});

menuCallButtonBurger.addEventListener('click', function() {
  menuCall.classList.toggle('menu-call--open');
});

menuCallCancelButton.addEventListener('click', function() {
  menuCall.classList.remove('menu-call--open');
});

const menuOrderButtonHeader = document.querySelector('.header__order');
const menuOrderButtonBurger = document.querySelector('.burger__order');
const menuOrder = document.querySelector('.menu-order');
const menuOrderCancelButton = document.querySelector('.menu-order__btn');

menuOrderButtonHeader.addEventListener('click', function() {
  menuOrder.classList.toggle('menu-order--open');
});

menuOrderButtonBurger.addEventListener('click', function() {
  menuOrder.classList.toggle('menu-order--open');
});

menuOrderCancelButton.addEventListener('click', function() {
  menuOrder.classList.remove('menu-order--open');
});

document.addEventListener("DOMContentLoaded", function () {
  var services__swiper;

  initSwiper();
  handleScreenSize();

  window.addEventListener("resize", function () {
      initSwiper();
      handleScreenSize();
    });

  function initSwiper() {
    if (services__swiper) {
      services__swiper.destroy();
    }
    services__swiper = new Swiper(".slider__services", {
      loop: true,
      slidesPerView: "auto",
      spaceBetween: 16,
      slideToClickedSlides: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      grabCursor: true,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
      },
      mousewheel: {
        sensitivity: 5,
      },
      slideOverflow: true,
      breakpoints: {
        375: { spaceBetween: 18 },
        500: { spaceBetween: 22 },
        700: { spaceBetween: 24 },
      },
      allowTouchMove: true,
    });
  }

  function handleScreenSize() {
    const screenSize = window.innerWidth;
    if (services__swiper && screenSize > 767) {
      services__swiper.allowTouchMove = false;
      services__swiper.destroy();
    }
  }

  var buttonToggle = document.querySelector('.button-services');
  var swiperToggle = document.querySelector('.slider__services');
  var buttonImage = buttonToggle.querySelector('img');
  var buttonText = buttonToggle.querySelector('span');

  buttonToggle.addEventListener('click', function() {
      swiperToggle.classList.toggle('slider__services--height');
      if (swiperToggle.classList.contains('slider__services--height')) {
          buttonImage.src = 'img/show.svg';
          buttonText.textContent = 'Показать все';
      } else {
          buttonImage.src = 'img/hide.svg';
          buttonText.textContent = 'Скрыть';
      }        
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var devices__swiper;

  initSwiper();
  handleScreenSize();

  window.addEventListener("resize", function () {
      initSwiper();
      handleScreenSize();
    });

  function initSwiper() {
    if (devices__swiper) {
      devices__swiper.destroy();
    }
    devices__swiper = new Swiper(".slider__devices", {
      loop: true,
      slidesPerView: "auto",
      spaceBetween: 16,
      slideToClickedSlides: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      grabCursor: true,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
      },
      mousewheel: {
        sensitivity: 5,
      },
      slideOverflow: true,
      breakpoints: {
        375: { spaceBetween: 18 },
        500: { spaceBetween: 22 },
        700: { spaceBetween: 24 },
      },
      allowTouchMove: true,
    });
  }

  function handleScreenSize() {
    const screenSize = window.innerWidth;
    if (devices__swiper && screenSize > 767) {
      devices__swiper.allowTouchMove = false;
      devices__swiper.destroy();
    }
  }

  var buttonToggle = document.querySelector('.button-devices');
  var swiperToggle = document.querySelector('.slider__devices');
  var buttonImage = buttonToggle.querySelector('img');
  var buttonText = buttonToggle.querySelector('span');

  buttonToggle.addEventListener('click', function() {
      swiperToggle.classList.toggle('slider__devices--height');
      if (swiperToggle.classList.contains('slider__devices--height')) {
          buttonImage.src = 'img/show.svg';
          buttonText.textContent = 'Показать все';
      } else {
          buttonImage.src = 'img/hide.svg';
          buttonText.textContent = 'Скрыть';
      }        
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var info__swiper;

  initSwiper();
  handleScreenSize();

  window.addEventListener("resize", function () {
      initSwiper();
      handleScreenSize();
    });

  function initSwiper() {
    if (info__swiper) {
      info__swiper.destroy();
    }
    info__swiper = new Swiper(".slider__info", {
      loop: true,
      slidesPerView: "auto",
      spaceBetween: 16,
      slideToClickedSlides: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      grabCursor: true,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
      },
      mousewheel: {
        sensitivity: 5,
      },
      slideOverflow: true,
      breakpoints: {
        375: { spaceBetween: 18 },
        500: { spaceBetween: 22 },
        700: { spaceBetween: 24 },
      },
      allowTouchMove: true,
    });
  }

  function handleScreenSize() {
    const screenSize = window.innerWidth;
    if (info__swiper && screenSize > 767) {
      info__swiper.allowTouchMove = false;
      info__swiper.destroy();
    }
  }
});