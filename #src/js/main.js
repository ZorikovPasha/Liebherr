$(function(){

  // Выпадание и закрытие фильтра в боковой панели каталога

  $('.aside-dropdown__title').on('click', function() {
    $(this).toggleClass('to-open')
    $(this).siblings('.aside-dropdown__box').slideToggle()
  })



  // закрытие последних фильтров при загрузке

  $('.aside-dropdown__box').slideUp(0);



  // открытие каталога на мобильных экранах

  // let firstTime = true;

  $('.aside-toggle__btn').on('click', function() {

    setTimeout( function() {
      $('.aside-catalog').addClass('opened')
      $('.wrapper').addClass('covered')
      $('body').addClass('lock')  
    }, 100)

  })

  $(document).on('click', function(e) {
    
    if ( $('.aside-catalog').hasClass('opened') && $(e.target).closest('.aside-catalog').length == 0) {
      $('.aside-catalog').removeClass('opened')
      $('.wrapper').removeClass('covered')
      $('body').removeClass('lock')
    }
  })


  new WOW().init();
});