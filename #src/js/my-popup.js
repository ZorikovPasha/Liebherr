$(function() {
  $(".header__btn, .footer__btn").on("click", function () {
    $(".popup").fadeIn();
    $("body").addClass("lock");
  });
  
  // Клик по ссылке "Закрыть".
  $(".popup__close").on("click", function () {
    $(this).closest(".popup").fadeOut();
    $("body").removeClass("lock");
  });
  
  // Закрытие по клавише Esc.
  $(document).on("keydown", function (e) {
    if (e.key === "Escape") {
      $(".popup").fadeOut();
      $(".popup-message").fadeOut();
      $("body").removeClass("lock");
    }
  });
  
  $(".popup__btn").on("click", function () {
    $(this).closest(".popup").fadeOut();
    $(".popup-message").fadeIn();
  
    // Клик по крестику или по кнопке вернуться.
    $(".popup-message__close, .popup-message__btn").on("click", function () {
      $(this).closest(".popup-message").fadeOut();
      $("body").removeClass("lock");
    });
  });
  
})