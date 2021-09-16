$(function(){

  $('.aside-dropdown__title').on('click', function() {
    $(this).toggleClass('to-open')
    $(this).siblings('.aside-dropdown__box').slideToggle()
  })

  $('.aside-dropdown__box').slideUp(0);

  $('.aside-toggle').on('click', function() {
    $('.aside-catalog').toggleClass('opened')
  })
});