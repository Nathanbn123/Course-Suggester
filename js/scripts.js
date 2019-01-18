$(function(){
  $(".btn").click(function(event){
  var intInput = $("#interest").val();
  var prefInput = $("#prefrence").val();
  var mobInput = $("#mobile").val();




  if (mobInput === "yes"){
    $("#java").fadeToggle();
  }


  if (intInput === "design") {
    if (prefInput === "both" || "small" && (mobInput === "no")){
      $("#css").fadeToggle();
  }
}

if (intInput === "function") {
  if (mobInput === "yes"){
    $("#ruby").fadeToggle();
}
}

event.preventDefault();






  });
});
