
$(document).ready(function () {

    var timeRemaining = 60;
    var correctAnswers = 0;
    var wrongAnswers = 0;

    var timer = setInterval(function () {
        $("#timer").text(timeRemaining)
        if (timeRemaining === 0) {
            alert("Your time is up!!")
            timeRemaining = 60;
            displayScore();
            clearInterval(timer);
        }
        timeRemaining--;
    }, 1000)

    function displayScore() {
        $("#score").text(correctAnswers);
    }


    $("button").on("click", function () {
        correctAnswers = [];
        wrongAnswers = [];
        $.each($("input[type='radio']:checked"), function () {
            if($(this).val() === "correct") {
                correctAnswers++;
            } else {
                wrongAnswers++;
            }
            console.log(correctAnswers)
            console.log(wrongAnswers)
            displayScore();
            clearInterval(timer)
        });

    })

});