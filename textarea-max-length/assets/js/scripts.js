$(function () {
  'use strict';

  var maxLength = 25;

  $("#textArea1").attr("maxlength", maxLength);
  $("#charCount").append(maxLength);

  var currentCount = maxLength;

  $("#textArea1").keyup( function() {
    // console.log($(this).text.length);
    currentCount = maxLength - $(this).val().length;
    // console.log(currentCount);
    if (currentCount >= 0) {
      $("#charCount").html(currentCount);
    }
  });

});
