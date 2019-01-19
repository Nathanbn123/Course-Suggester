$(function(){
  $(".btn").click(function(event){
  var intInput = $("#interest").val();
  var prefInput = $("#prefrence").val();
  var mobInput = $("#mobile").val();

  $('.col-lg-4').fadeOut();

  if (intInput === "function"){
    if (prefInput === "big" && (mobInput === "yes"))
    $("#java").fadeIn();
  }


  if (intInput === "design") {
    if (mobInput === "no"){
      $("#css").fadeIn();
  }
}

  if (intInput === "function" || "both2") {
      $("#ruby").fadeIn();
  }


event.preventDefault();

  });
});
