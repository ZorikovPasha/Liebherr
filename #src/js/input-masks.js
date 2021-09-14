$(function() {
  $(".input-mask").inputmask({
    mask: "+7(999) 999-99-99",
  });
  
  $(".email-mask").inputmask({
    mask: "*{+}@a{+}.a{+}",
  });
  
})
