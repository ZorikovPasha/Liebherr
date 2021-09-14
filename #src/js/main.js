$(function(){

  $('.aside-dropdown__title').on('click', function() {
    $(this).toggleClass('to-open');
    $(this).siblings('.aside-dropdown__box').slideToggle();
  })

  $('.aside-dropdown__box').slideUp(0);

  $('.view__btn-list').on('click', function() {
    $('.catalog-content__items').addClass('catalog-content__items--list');
    $('.product-item__info').addClass('product-item__info--catalog')
    $('.product-item__title').addClass('product-item__title--catalog')
  })

  $('.view__btn-grid').on('click', function() {
    $('.catalog-content__items').removeClass('catalog-content__items--list');
    $('.product-item__info').removeClass('product-item__info--catalog')
    $('.product-item__title').removeClass('product-item__title--catalog');
  })

  $('.tabs__toggle-item').on('click', function(e) {
    e.preventDefault();
    $('.tabs__toggle-item').removeClass('tabs__toggle-item--pressed')
    $(this).addClass('tabs__toggle-item--pressed')
    $('.tabs__content-item').removeClass('tabs__content-item--shown')
    $($(this).attr('href')).addClass('tabs__content-item--shown')
  })

  $('.menu-btn').on('click', function() {
    $('.mob-menu').addClass('opened')
  })

  $('.mob-menu__close').on('click', function() {
    $('.mob-menu').removeClass('opened')
  })
  
});