//need quetions and need answers

var questions = [
    {
        question: "What color is the sky?",
        choices: ["A. Blue", "B. Purple", "C. Orange"],
        correct: "0"
    },
    {
        question: "What color is the ocean?",
        choices: ["A. Blue", "B. Purple", "C. Orange"],
        correct: "0"
    },
    {
        question: "What color are trees?",
        choices: ["A. Blue", "B. Purple", "C. Green"],
        correct: "2"
    }
];
//need to create a variable to keep track of the answers correct
var score = 0;
var WrongAnswers = 0;
var timeleft = 5;
var intervalId;

//need to set the timer to start once the start button is pressed
//need to create an event function to start the game 
function timeRun() {

    intervalId = setTimeout(decrement, 1000);
}

function decrement() {
    if (timeleft > 0) {
        timeleft--;
        $("#timer").html("<h2>" + "Time Left: " + timeleft + "</h2>");
        timeRun();
    } else if (timeleft === 0) {
        clearTimeout(intervalId);
        alert("You're out of time! " + "correct answers = " + score + " " + "Incorrect answers = " + " " + WrongAnswers);

    }
}

//need to create a function so that the questions and the answers are dispayed
function renderQuestions(questions) {

    var questionDisplay = $("<div>");
    questionDisplay.addClass('questions');

    for (var i = 0; i < questions.length; i++) {

        console.log(questions[i].question);
// =====================================for the answers

        var $h1 = $('<div>');

        $h1.text(questions[i].question);

        for (var j = 0; j < questions[i].choices.length; j++) {
            var $p = $("<p>");
            $p.text(questions[i].choices[j]);
            $h1.append($p);
// ===================================for the button 
            var btnInput = $("<input>");
            btnInput.attr('type', 'radio');
            btnInput.attr('name',i);
            btnInput.attr('answerIndex',j);
            $p.prepend(btnInput);
        }

        questionDisplay.append($h1);
        $('#question').append(questionDisplay);

        questionDisplay.append($h1);
        $('#question').append(questionDisplay);

        for (var c = 0; c < questions[i].correct.length; c++) {
            console.log(questions[i].correct[c]);
        }
    }
    $("input").on("click", function (event) {
        // console.log(this);
        var questionIndex = $(this).attr('name');
        console.log(questions[questionIndex]);
        var answerIndex = $(this).attr('answerIndex');
        console.log(answerIndex);
        console.log(questions[parseInt(questionIndex)].correct);
        console.log(questions[parseInt(questionIndex)].choices[answerIndex]);

        if (answerIndex === questions[parseInt(questionIndex)].correct){
            score++
        }
        else {
            WrongAnswers++
        }
    })
}
//=============================================
$(document).ready(function () {
    $("#second-page").hide();
    renderQuestions(questions);

    $("#timer").html("<h2>"+ "Time Left: " + timeleft + "</h2>");
    $("#startGame").on("click", function () {
        timeRun();
    $("#second-page").show()
    })


});
