$(function () {
  'use strict';

  $('.btn').on('click', function () {
    /* $(this).text('Hi');  this --> only the button being clicked */
    $('.modal-container').addClass('showing');
  });

  $('.modal-close, .modal-container').on('click', function () {
    $('.modal-container').removeClass('showing');
    $(".btn").text('Click me');  /*  all buttons with class ".btn" */
  });

  $('.modal').click(function (e) {
    e.stopPropagation();
  });
});
