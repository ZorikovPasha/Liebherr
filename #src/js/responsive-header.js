
$(window).resize(function(event) {
  adaptive_header();
});

function adaptive_header() {
	let w = $(window).outerWidth();

  if ( w < 1010 ) {
    $('.header__nav').appendTo('.mob-menu__body')
    $('.header__info').appendTo('.mob-menu__body')
  }

  if ( w < 993 ) {
    $('.footer__rights').appendTo('.footer__inner')
  }

  if ( w < 820 ) {
    $('.header__btn').appendTo('.mob-menu__body')
    $('.main-about__video').appendTo('.main-about__box')

  }

  
}


adaptive_header();