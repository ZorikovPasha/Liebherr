$(function(){
  
  $('.top__slider').slick({

    fade: true,
    infinite: false,
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/slider-arr-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/slider-arr-right.svg" alt=""></button>',


    // responsive: [
    //   {
    //     breakpoint: 1180,
    //     settings: {
    //       slidesToShow: 3,
    //     }
    //   }
    // ]
  });

  $('.rent__slider').slick({
    dots: true,
    fade: true,
    infinite: false,
    prevArrow: '<button type="button" class="slick-btn slick-prev"><div class="slider-arr-wrapper"><svg width="31" height="8" viewBox="0 0 31 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.646446 3.64645C0.451183 3.84171 0.451183 4.15829 0.646446 4.35356L3.82843 7.53554C4.02369 7.7308 4.34027 7.7308 4.53553 7.53554C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17158C4.73079 0.976313 4.73079 0.659731 4.53553 0.464468C4.34027 0.269206 4.02369 0.269206 3.82843 0.464468L0.646446 3.64645ZM31 3.5L0.999998 3.5L0.999998 4.5L31 4.5L31 3.5Z" fill="#2D2D2D"/></svg></div></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><div class="slider-arr-wrapper"><svg width="31" height="8" viewBox="0 0 31 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.3536 4.35355C30.5488 4.15829 30.5488 3.84171 30.3536 3.64644L27.1716 0.464464C26.9763 0.269202 26.6597 0.269202 26.4645 0.464464C26.2692 0.659726 26.2692 0.976308 26.4645 1.17157L29.2929 4L26.4645 6.82842C26.2692 7.02369 26.2692 7.34027 26.4645 7.53553C26.6597 7.73079 26.9763 7.73079 27.1716 7.53553L30.3536 4.35355ZM4.37114e-08 4.5L30 4.5L30 3.5L-4.37114e-08 3.5L4.37114e-08 4.5Z" fill="#2D2D2D"/></svg></div></button>',
  })
  
  $('.projects-nav').slick({
    slidesToShow: 8,
    variableWidth: true,
    arrows: false,
    focusOnSelect: true,
    asNavFor: '.projects-slider',
  })

  $('.projects-slider').slick ({
    fade: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.projects-nav',
    prevArrow: '<button type="button" class="slick-btn slick-prev"><div class="slider-arr-wrapper"><svg width="31" height="8" viewBox="0 0 31 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.646446 3.64645C0.451183 3.84171 0.451183 4.15829 0.646446 4.35356L3.82843 7.53554C4.02369 7.7308 4.34027 7.7308 4.53553 7.53554C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17158C4.73079 0.976313 4.73079 0.659731 4.53553 0.464468C4.34027 0.269206 4.02369 0.269206 3.82843 0.464468L0.646446 3.64645ZM31 3.5L0.999998 3.5L0.999998 4.5L31 4.5L31 3.5Z" fill="#2D2D2D"/></svg></div></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><div class="slider-arr-wrapper"><svg width="31" height="8" viewBox="0 0 31 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.3536 4.35355C30.5488 4.15829 30.5488 3.84171 30.3536 3.64644L27.1716 0.464464C26.9763 0.269202 26.6597 0.269202 26.4645 0.464464C26.2692 0.659726 26.2692 0.976308 26.4645 1.17157L29.2929 4L26.4645 6.82842C26.2692 7.02369 26.2692 7.34027 26.4645 7.53553C26.6597 7.73079 26.9763 7.73079 27.1716 7.53553L30.3536 4.35355ZM4.37114e-08 4.5L30 4.5L30 3.5L-4.37114e-08 3.5L4.37114e-08 4.5Z" fill="#2D2D2D"/></svg></div></button>',
  })

  $('.catalog-slider').slick({
    arrows: true,
    dots: true,
    variableWidth: true,
    centerMode: true,
    infinite: false,
    initialSlide: 2,
    prevArrow: '<button type="button" class="slick-btn slick-prev"><div class="slider-arr-wrapper"><svg width="31" height="8" viewBox="0 0 31 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.646446 3.64645C0.451183 3.84171 0.451183 4.15829 0.646446 4.35356L3.82843 7.53554C4.02369 7.7308 4.34027 7.7308 4.53553 7.53554C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17158C4.73079 0.976313 4.73079 0.659731 4.53553 0.464468C4.34027 0.269206 4.02369 0.269206 3.82843 0.464468L0.646446 3.64645ZM31 3.5L0.999998 3.5L0.999998 4.5L31 4.5L31 3.5Z" fill="#2D2D2D"/></svg></div></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><div class="slider-arr-wrapper"><svg width="31" height="8" viewBox="0 0 31 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.3536 4.35355C30.5488 4.15829 30.5488 3.84171 30.3536 3.64644L27.1716 0.464464C26.9763 0.269202 26.6597 0.269202 26.4645 0.464464C26.2692 0.659726 26.2692 0.976308 26.4645 1.17157L29.2929 4L26.4645 6.82842C26.2692 7.02369 26.2692 7.34027 26.4645 7.53553C26.6597 7.73079 26.9763 7.73079 27.1716 7.53553L30.3536 4.35355ZM4.37114e-08 4.5L30 4.5L30 3.5L-4.37114e-08 3.5L4.37114e-08 4.5Z" fill="#2D2D2D"/></svg></div></button>',
  })

  $('.questions__form-input--tel').inputmask({
    mask: "+7(999) 999-99-99"
  });

  $('.questions__form-input--email').inputmask({
    mask: "*{+}@a{+}.a{+}"
  });

});