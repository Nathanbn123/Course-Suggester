$(".suggestion").fadeOut();
$(function(){
  $(".btn").click(function(event){
  var intInput = $("#interest").val();
  var prefInput = $("#prefrence").val();
  var mobInput = $("#mobile").val();





  if (mobInput === "yes"){

    $("#java").fadeIn();
  }


  if (intInput === "design") {
    if (prefInput === "both" || "small" && (mobInput === "no")){

      $("#css").fadeIn();
  }
}

if (intInput === "function") {
  if (mobInput === "yes"){
    $("#ruby").fadeIn();
}
}

event.preventDefault();






  });
});
