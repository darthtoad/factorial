$(document).ready(function(){
  $("#theForm").submit(function(event){
    event.preventDefault();
    $(".result").empty();
    var number = parseInt($("input#number").val());
    //if (!number) {
    //  alert("Please enter a number")
    //} else {
      $(".result").append(factorial(number))
    ;//}
  })
})

function factorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else if (!number) {
    alert("Please enter a number");
  } else if (number < 0) {
    return "Numbers less than 0 cannot be factored"
  } else {
    var factNumber = 1;
    for (var i = 1; i < number; i++) {
      factNumber *= i + 1;
    }
    return factNumber;
  }
}
