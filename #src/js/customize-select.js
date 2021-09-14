$(function() {
  $(".sort-select").on("click", function () {
    $(".sort-select__list").toggleClass("sort-select__list--visible");
  });
  
  $(".sort-select__item").each(function () {
    $(this).on("click", function (e) {
      e.stopPropagation();
      $(".sort-select").text($(this).text());
      $(".sort-select__list").removeClass("sort-select__list--visible");
      $(".sort-select__input").attr("value", $(this).attr("data-value"));
    });
  });
  
  $(document).on("click", function (e) {
    if (!$(e.target).hasClass("sort-select")) {
      setTimeout(function () {
        $(".sort-select__list").removeClass("sort-select__list--visible");
      }, 150);
    }
  });
  
  $(document).on("keydown", function (e) {
    if (e.key === "Tab" || e.key === "Escape") {
      setTimeout(function () {
        $(".sort-select__list").removeClass("sort-select__list--visible");
      }, 150);
    }
  });
  
})