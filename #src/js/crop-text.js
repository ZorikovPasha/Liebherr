$(function() {
  const ELEMENTS_SELECTOR = {
    textToCrop: "[data-crop]",
  };
  
  let $textToCrop = $(ELEMENTS_SELECTOR.textToCrop);
  
  $textToCrop.each(function () {
    $(this).dotdotdot({
      ellipsis: "...",
      height: Number($(this).attr("data-crop")),
    });
  });
  
})