$('.tabs__toggle-item').on('click', function(e) {
  e.preventDefault()
  $('.tabs__toggle-item').removeClass('tabs__toggle-item--pressed')
  $(this).addClass('tabs__toggle-item--pressed')
  $('.tabs__content-item').removeClass('tabs__content-item--shown')
  $($(this).attr('href')).addClass('tabs__content-item--shown')
})