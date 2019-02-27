
$(document).ready(function() {
var timeRemaining = 60;
var timer = setInterval(function () {
    $("#timer").text(timeRemaining)
    if (timeRemaining === 0) {
        alert("Your time is up!!")
    }
    timeRemaining--;
}, 1000)



$("button").on("click", function () {
    var userAnswers = [];
    $.each($("input[type='checkbox']:checked"), function () {
        userAnswers.push($(".form-check-input").val());
        console.log(userAnswers)
    });

})

});