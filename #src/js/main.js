$(function(){

  // Выпадание и закрытие фильтра в боковой панели каталога

  $('.aside-dropdown__title').on('click', function() {
    $(this).toggleClass('to-open')
    $(this).siblings('.aside-dropdown__box').slideToggle()
  })

  // закрытие последних фильтров при загрузке

  $('.aside-dropdown__box').slideUp(0);

  // открытие каталога на мобильных экранах

  $('.aside-toggle').on('click', function() {
    $('.aside-catalog').toggleClass('opened')
  })
});