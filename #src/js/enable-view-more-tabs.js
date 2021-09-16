
  $('.catalog-tabs__more').on('click', function() {

    if ( $(this).hasClass('active') ) {
      $(this).html('еще')
      $('.catalog-tabs__item').each( function() {
        
        if ($(this).hasClass('secondary') ) {
          $(this).removeClass('catalog-tabs__item--mobile')
        }
      })
    } else {

      $('.catalog-tabs__item').each( function() {
        if ( !$(this).hasClass('catalog-tabs__item--mobile') ) {
          $(this).addClass('catalog-tabs__item--mobile').addClass('secondary')
        }
      })
      $(this).html('меньше')
    }
    $(this).toggleClass('active')  
  })