(function () {

    function Question(question, answers, correctAnswer) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }

    Question.prototype.displayQuestion = function() {
        console.log(this.question);
        for (let i = 0; i < this.answers.length; i++) {
            console.log(i + ": " + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans, callback) {
        var scr;

        if (ans === this.correctAnswer) {
            console.log("Correct answer!");
            scr = callback(true);
        } else {
            console.log("Wrong answer!");
            scr = callback(false);
        }

        this.displayScore(scr);
    }

    Question.prototype.displayScore = function(score) {
        console.log("Your score: " + score);
        console.log("------------------------");
    }

    var questions = [
        new Question("What's my name?", ["Anna", "Marta", "Kasia"], 1),
        new Question("What's my boyfriend name?", ["Michal", "Maciej", "Kuba"], 0),
        new Question("What's my dog name?", ["Misza", "Bobo", "Psotka"], 2)
    ];

    function score() {
        var scr = 0;
        return function(answer) {
            if (answer) {
                scr++;
            }
            return scr;
        }
    }
    var keepScore = score();

    function nextQuestion() {
        var questionNumber = Math.floor((Math.random() * questions.length));
        questions[questionNumber].displayQuestion();
        
        var answer = prompt("Please select the correct answer.");
        if (answer !== "exit") {
            questions[questionNumber].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }
    }
    nextQuestion();  

})();