const menuBtn = document.querySelector('.burger');
const menu = document.querySelector('.nav__items');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');

});

const btn = document.querySelector('.burger');
const nav = document.querySelector('.nav__items');

btn.addEventListener('click', () => {
  nav.classList.toggle('menu-open')
});


$(function () {
  $('.professionals__items').slick({
    slidesToShow: 3,
    arrows: false,
    dots: false,
    infinite: true,
    variableWidth: true,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
  });
});


  jQuery('.lightzoom').lightzoom();


$(document).ready(function () {
  //Simple usage
  $('img.light-zoom').lightzoom();
  
  //customize
  $('img.light-zoom').lightzoom({
    speed:                 400,   // скорость появления
    imgPadding:            0,    // значение отступа у изображения
    overlayOpacity:        '.3', // прозрачность фона (от 0 до 1)
    viewTitle:             false, // true, если надо показывать подпись к изобажению
    isOverlayClickClosing: true, // true, если надо закрывать окно при клике по затемненной области
    isWindowClickClosing:  true, // true, если надо закрывать окно при клике по любой области
    isEscClosing:          true, // true, если надо закрывать окно при нажатии на кнопку Esc
  });
  
});

