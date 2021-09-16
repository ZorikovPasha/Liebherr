$(function(){


  let mixer = mixitup('.catalog-content__items', {
    animation: {
      enable: false
    }
  })

  // $('.catalog-tabs__item').on('click', function() {
  //   if ( !$(this).hasClass('pressed') ) {
  //     $('.catalog-tabs__item').removeClass('pressed')
  //     $(this).addClass('pressed')

  //   } else {
  //     $('.catalog-tabs__item').removeClass('pressed');
  //     mixer.filter('.all');
  //   }
  // })

  $('.catalog-tabs__item').on('click', function() {
      $('.catalog-tabs__item').removeClass('pressed')
      $(this).addClass('pressed')
  })


})