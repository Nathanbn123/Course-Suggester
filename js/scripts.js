$(function(){
  $(".btn").click(function(event){
  var intInput = $("#interest").val();
  var prefInput = $("#prefrence").val();
  var mobInput = $("#mobile").val();




  if(intInput === "function") {
    if (prefInput === "big" && (mobInput === "yes")){
      $(".java").fadeToggle();
    }
}

    if (intInput === "design") {
  if (prefInput === "both" && (mobInput === "yes")){
    $(".css").fadeToggle();
    }
  }

  if (intInput === "design") {
if (prefInput === "small" && (mobInput === "yes")){
  $(".ruby").fadeToggle();
  }
}

event.preventDefault();






  });
});
