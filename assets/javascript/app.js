    //need quetions and need answers

    var questions = [
        {
            question: "What color is the sky?",
            choices: ["A. Blue", "B. Purple", "C. Orange"],
            correct: "A. Blue"
        },
        {
            question: "What color is the ocean?",
            choices: ["A. Blue", "B. Purple", "C. Orange"],
            correct: "A. Blue"
        },
        {
            question: "What color are trees?",
            choices: ["A. Blue", "B. Purple", "C. Green"],
            correct: "C. Green"
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
            $("#timer").html("<h2>" + timeleft + "</h2>");
            timeRun();
        } else if (timeleft === 0) {
            clearTimeout(intervalId);
            alert("You're out of time!" + "correct answers =" + score + "" + "Incorrect answers=" + "" + WrongAnswers);

        }
    }

    //need to create a function so that the questions and the answers are dispayed
    function renderQuestions(questions) {

        var questionDisplay = $("<div>");
        questionDisplay.addClass('questions');

        for (var i = 0; i < questions.length; i++) {

            console.log(questions[i].question)
            // =====================================for the answers

            var $h1 = $('<div>');

            $h1.text(questions[i].question);

            for (var j = 0; j < questions[i].choices.length; j++) {
                console.log(questions[i].choices[j]);
                var $p = $("<p>");
                $p.text(questions[i].choices[j]);
                $h1.append($p);
            // ===================================for the button 
                var btnInput = $("<input>");
                btnInput.attr('type', 'radio');
                btnInput.attr('name', questions[i].choices[j]);
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
    }
    //=============================================
    $(document).ready(function () {

        renderQuestions(questions);

        $("#timer").html("<h2>" + timeleft + "</h2>");
        $("#startGame").on("click", function () {
            timeRun();

        })
    //=====to keep track of right/wrong answers=====

        $("<input>").on("click", function () {
            var userInput = event.click
            if (userInput === questions[i].correct[i]) {
                score++ 
            }
            else {
                WrongAnswers++
            }
        })

        //need to make i so that they can oly select one answer


    });
