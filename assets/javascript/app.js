
$(document).ready(function () {

    var timeRemaining = 60;

    var timer = setInterval(function () {
        $("#timer").text(timeRemaining)
        if (timeRemaining === 0) {
            alert("Your time is up!!")
            timeRemaining = 60;
        }
        timeRemaining--;
    }, 1000)



    $("button").on("click", function () {
        var correctAnswers = [];
        var wrongAnswers = [];
        $.each($("input[type='checkbox']:checked"), function () {
            if($(this).val() === "correct") {
                correctAnswers.push($(this).val())
            } else {
                wrongAnswers.push($(this).val())
            }
            console.log(correctAnswers)
            console.log(wrongAnswers)
        });

    })

});