$('.view__btn-list').on('click', function() {
  $('.catalog-content__items').addClass('catalog-content__items--list')
  $('.catalog-content__items').children('.product-item__info').addClass('product-item__info--catalog')
  $('.catalog-content__items').children('.product-item__title').addClass('product-item__title--catalog')
  $('.catalog-content__items').children('.product-item').addClass('product-item--wide')
})

$('.view__btn-grid').on('click', function() {
  $('.catalog-content__items').removeClass('catalog-content__items--list')
  $('.catalog-content__items').children('.product-item__info').removeClass('product-item__info--catalog')
  $('.catalog-content__items').children('.product-item__title').removeClass('product-item__title--catalog')
  $('.catalog-content__items').children('.product-item').removeClass('product-item--wide')
})
