var quizForm = document.querySelector(".quiz-form")
var submitAnswerBtn = document.querySelector("#submit-answer-btn")
var outputEl = document.querySelector("#output")

var correctAnswers = ["90", "right angle triangle", "equilateral triangle"]


function calculateScore() {
    let score = 0;
    let index = 0;
    var formResults = new FormData(quizForm);
    for (let value of formResults.values()) {
        if (value === correctAnswers[index]) {
            score = score + 1;
        }
        index = index + 1;
    }
   // console.log(score);
    outputEl.innerText = "Your Score is " + score;
}

submitAnswerBtn.addEventListener("click", calculateScore);