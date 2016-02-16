$(function () {
  'use strict';

  var listHTML = "<li><input type=\"text\" value=\"\"></input></li>";

// console.log($("#list").html());
// $("#list").html(str);
// console.log($("#list").html());

  $("#list").children().on( "change", function () {

    console.log("* on change *");
    console.log($("#list").children().length);

    $("#list").children().each( function( index ) {
      console.log( index + " : " + $(this).html() );
      console.log($(this).text());
      if ( ( $("input:text", this).val().length === 0 ) && !($("input:text", this).is(":focus")) ) {
        console.log("* on remove *");
        console.log($("input:text", this).is(":focus"));
        $(this).remove();
      }
    });

    // }
  });

  $("#list").children().on("keyup", function () {
    console.log("* on keypress *");
    console.log($("input:text", this).val());
    if ( $("input:text", this).val().length <= 1) {
      console.log("* on append *");
      $("#list").append(listHTML);
    }
  });


  // $("#list").keypress( function() {
  //
  //     console.log("***In keyup Listener***");
  //     console.log($(this).val());
  //     console.log($("#textInput1").attr("id "));
  //
  //     if ( $("#textInput1").val() <= 1) {
  //       $("#list").append(listHTML);
  //     }
  // });

// $(this).click( function() {
//   console.log("*In click Listener*");
//    $(this).remove();
//
// });

});
