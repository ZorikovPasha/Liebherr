$(function() {
  var $rangeWeight = $(".range-slider--weight");
  var $rangeHeight = $(".range-slider--height");
  var $rangeLength = $(".range-slider--length");
  
  var $inputWeightFrom = $(".filter-weight__from");
  var $inputWeightTo = $(".filter-weight__to");
  
  var $inputHeightFrom = $(".filter-height__from");
  var $inputHeightTo = $(".filter-height__to");
  
  var $inputLengthFrom = $(".filter-length__from");
  var $inputLengthTo = $(".filter-length__to");
  
  var instanceWeight;
  var instanceHeight;
  var instanceLength;
  
  var minWeigth = 40;
  var maxWeigth = 750;
  var fromWeigth = 40;
  var toWeigth = 160;
  
  var minHeight = 10;
  var maxHeight = 100;
  var fromHeight = 10;
  var toHeight = 84;
  
  var minLength = 20;
  var maxLength = 120;
  var fromLength = 30;
  var toLength = 100;
  
  $(".range-slider--weight").ionRangeSlider({
    onStart: updateInputsWeight,
    onChange: updateInputsWeight,
    onFinish: updateInputsWeight,
  });
  
  $(".range-slider--height").ionRangeSlider({
    onStart: updateInputsHeight,
    onChange: updateInputsHeight,
    onFinish: updateInputsHeight,
  });
  
  $(".range-slider--length").ionRangeSlider({
    onStart: updateInputsLength,
    onChange: updateInputsLength,
    onFinish: updateInputsLength,
  });
  
  instanceWeight = $rangeWeight.data("ionRangeSlider");
  instanceHeight = $rangeHeight.data("ionRangeSlider");
  instanceLength = $rangeLength.data("ionRangeSlider");
  
  function updateInputsWeight(data) {
    from = data.from;
    to = data.to;
  
    $inputWeightFrom.prop("value", from);
    $inputWeightTo.prop("value", to);
  }
  
  function updateInputsHeight(data) {
    from = data.from;
    to = data.to;
  
    $inputHeightFrom.prop("value", from);
    $inputHeightTo.prop("value", to);
  }
  
  function updateInputsLength(data) {
    from = data.from;
    to = data.to;
  
    $inputLengthFrom.prop("value", from);
    $inputLengthTo.prop("value", to);
  }
  
  function validateFrom(value, min, to) {
    if (value < min) {
      value = min;
    } else if (value > to) {
      value = to;
    }
  }
  
  function ValidateTo(value, from, max) {
    if (value < from) {
      value = from;
    } else if (value > max) {
      value = max;
    }
  }
  
  $inputWeightFrom.on("change", function () {
    var val = $(this).prop("value");
  
    validateFrom(val, minWeigth, toWeigth);
  
    instanceWeight.update({
      from: val,
    });
  
    $(this).prop("value", val);
  });
  
  $inputWeightTo.on("change", function () {
    var val = $(this).prop("value");
  
    ValidateTo(val, fromWeigth, maxWeigth);
  
    instanceWeight.update({
      to: val,
    });
  
    $(this).prop("value", val);
  });
  
  $inputHeightFrom.on("change", function () {
    var val = $(this).prop("value");
  
    validateFrom(val, minHeight, toHeight);
  
    instanceHeight.update({
      from: val,
    });
  
    $(this).prop("value", val);
  });
  
  $inputHeightTo.on("change", function () {
    var val = $(this).prop("value");
  
    ValidateTo(val, fromHeight, maxHeight);
  
    instanceHeight.update({
      to: val,
    });
  
    $(this).prop("value", val);
  });
  
  $inputLengthFrom.on("change", function () {
    var val = $(this).prop("value");
  
    validateFrom(val, minLength, toLength);
  
    instanceLength.update({
      from: val,
    });
  
    $(this).prop("value", val);
  });
  
  $inputLengthTo.on("change", function () {
    var val = $(this).prop("value");
  
    ValidateTo(val, fromLength, maxLength);
  
    instanceLength.update({
      to: val,
    });
  
    $(this).prop("value", val);
  });
  
})