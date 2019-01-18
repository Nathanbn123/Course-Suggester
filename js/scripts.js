$(function(){
  $(".btn").click(function(event){
  var intInput =  $("#interest").val();
  var prefInput = $("#prefrence").val();
  var mobInput = $("#mobile").val();


  if(intInput === "big" || "both" && prefInput === "big" && mobInput === "yes") {
    $(".suggestion .java").toggleFade();
  }

event.preventDefault();





  });
});
