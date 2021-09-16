$('.menu-btn').on('click', function() {
  $('.mob-menu').addClass('opened')
  $('body').addClass('lock')
})

$('.mob-menu__close').on('click', function() {
  $('.mob-menu').removeClass('opened')
  $('body').removeClass('lock')
})