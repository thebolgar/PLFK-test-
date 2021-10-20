$(document).ready(function(){
    $('.nav__icon-burger').on('click', function (){
        $('.header__menu-adaptive').removeClass('header__menu-adaptive--close');
        $('.header__top-line').removeClass('header__top-line--active');
        $('body').removeClass('lock');
    });
    $('.nav__item-close').on('click', function (){
        $('.header__menu-adaptive').addClass('header__menu-adaptive--close') 
        $('.header__top-line').addClass('header__top-line--active');
        $('body').addClass('lock');   
    });
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 5,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        // when window width is >= 320px
        1200: {
          slidesPerView: 8,
          spaceBetween: 10
        },
        700: {
            slidesPerView: 5,
            spaceBetween: 10
          },
        500: {
            slidesPerView: 3,
            spaceBetween: 10
        }
    }
  });