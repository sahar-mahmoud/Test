$(document).ready(function () {
    $("#fadeOut").click(function () {
      $(".fadeText").fadeOut();
    });
    $("#fadeIn").click(function () {
      $(".fadeText").fadeIn();
    });
    $("#hide").click(function () {
      $(".hideShowText").hide();
    });
    $("#show").click(function () {
      $(".hideShowText").show();
    });
    $(".animation").click(function () {
      let box = $("#box");
      if (box.hasClass("boxAnimation")) {
        box.removeClass("boxAnimation");
      } else {
        box.addClass("boxAnimation");
      }
    });
    $("#parBtn").click(function () {
      let parText = $("#textInput").val();
      let newPar = $("<p>").text(parText);
      if (parText !== "") {
        $(".parElement").prepend(newPar);
        $("#textInput").val("");
      } else {
        alert("Please fill the input with a text");
      }
    });
    $(".parElement").on("click", "#removeBtn", function () {
      $(".parElement p:first-child").remove();
    });
    $(".slideUp").click(() => {
      $(".Item").slideUp();
    });
    $(".slideDown").click(() => {
      $(".Item").slideDown();
    });
    $(".changeTextBtn").click(() => {
      $(".changeText").html("I am changed text!");
    });
  });