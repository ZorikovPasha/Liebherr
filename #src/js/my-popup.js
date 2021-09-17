$(function() {
  $(".header__btn, .footer__btn").on("click", function () {
    $(".popup").addClass('shown')
    $("body").addClass("lock")
  });
  
  // Клик по ссылке "Закрыть".
  $(".popup__close").on("click", function () {
    $(this).closest(".popup").removeClass('shown')
    $("body").removeClass("lock")
  });
  
  // Закрытие по клавише Esc.
  $(document).on("keydown", function (e) {
    if (e.key === "Escape") {
      $(".popup").removeClass('shown')
      $(".popup-message").removeClass('shown')
      $("body").removeClass("lock");
    }
  });
  
  $(".popup__btn").on("click", function () {
    $(this).closest(".popup").removeClass('shown');
    $(".popup-message").addClass('shown');
  
    // Клик по крестику или по кнопке вернуться.
    $(".popup-message__close, .popup-message__btn").on("click", function () {
      $(this).closest(".popup-message").removeClass('shown');
      $("body").removeClass("lock");
    });
  });
  
})