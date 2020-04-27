//function for app

function populate(){
    if(quiz.isEnded()){
        ShowScores();
    }

    else {
        //Show questions

        var element = document.getElementById("question"); 
        element.innerHTML = quiz.getQuestionIndex().text;
        console.log(questions);

        //show choices

        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++){
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
    
};

function guess(id, guess){
    var button = document.getElementById(id);
    button.onclick = function(){
        quiz.guess(guess);
        populate();
    }
};

function showProgress(){
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + "of" + quiz.questions.length;
}

function ShowScores(){
    var gameOverHtml = "<h1>Result</h1>";
    gameOverHtml += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;


};

 var questions = [
     new Question ("What is the HTML tag under which one can write the JavaScript code?", ["Javascript", "HTML", "Script","JS"], "Script"),
     new Question ("Which language is used for styling the web pages?", ["HTML", "JavaScript", "JQuery","CSS"], "CSS"),
     new Question ("Which of the following is not a reserved word in JavaScript?", ["Interface", "Short", "Throws","Program"], "Program"),
     new Question ("What is the JavaScript syntax for printing values in Console?", ["console.log", "print", "print.console","console.print"], "console.log"),

 ];
 

 var quiz = new Quiz(questions);

 populate();