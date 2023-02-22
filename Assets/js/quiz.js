var question = document.querySelector('#question');
var btn1 = document.querySelector('#btn-1');
var btn2 = document.querySelector('#btn-2');
var btn3 = document.querySelector('#btn-3');
var btn4 = document.querySelector('#btn-4');
var scoreText = document.querySelector('#score');
var choices = document.querySelector(".choice-container");
var timerEl = document.querySelector('.timer');


var questionsIndex = 0;
var secondsLeft = 30;






var currentQuestion = {}
var acceptedAnswer = true
var score = 0
var allQuestions =[]

var questions =[
    {
        question: 'Which of these is a string?',
        choice1: "'Mike'",
        choice2: '13',
        choice3: 'True',
        choice4: '0.4376',
        answer: "'Mike'",
    },
    {
        question: 'What would be considered a boolean value?',
        choice1: 'A ghost',
        choice2: 'False',
        choice3: 'Ozzy Osbourne',
        choice4: '0.00998',
        answer: 'False',
    },
    {
        question: 'What does DOM stand for?',
        choice1: 'Document Orientation Movement',
        choice2: 'Disable Object Model',
        choice3: 'Dominant Orientation Model',
        choice4: 'Document Object Model',
        answer: 'Document Object Model',
    },
    {
        question: 'Which of thes is a reference type?',
        choice1: 'An applications rules',
        choice2: 'Scope',
        choice3: 'An array',
        choice4: 'The DOM',
        answer: 'An array',
    },
    {
        question: 'When naming a variable, what cannnot be included?',
        choice1: 'Uppercase letters',
        choice2: 'Numbers',
        choice3: 'A space or hyphen',
        choice4: 'Lowercase letters',
        answer: 'A space or hyphen',
    }
]




startQuiz = () => {
    score = 0
    secondsLeft = 30
    scoreText.innerText = 'Score: ' + score;
    getNewQuestion()

}
// start the timer
var timerInterval = setInterval(function() {
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      localStorage.setItem('mostRecentScore', score);
      return window.location.assign('highscores.html');
    }

    secondsLeft--;
    timerEl.textContent = "Time left: " + secondsLeft;
  }, 1000);



getNewQuestion = () => {
    if(questionsIndex === questions.length ) {
        localStorage.setItem('mostRecentScore', score);

        return window.location.assign('/highscores.html');
    }

    question.innerText = questions[questionsIndex].question
    btn1.innerText = questions[questionsIndex].choice1
    btn2.innerText = questions[questionsIndex].choice2
    btn3.innerText = questions[questionsIndex].choice3
    btn4.innerText = questions[questionsIndex].choice4


}

function checkAnswer(answer){
    if (answer===questions[questionsIndex].answer){
        questionsIndex++ 
        document.getElementById('score').innerHTML = score+= 20;
    getNewQuestion()
    }
    else { 
        questionsIndex++
        getNewQuestion()
    }

}

startQuiz()




choices.addEventListener('click', ()=>{
    var userInput = this.event.target.innerText
    console.log(userInput)
    checkAnswer(userInput)
})

var submit = document.querySelector('#btn-submit');
var finalScore = document.querySelector('#score')


incrementScore =() => {
    score
}

// var mostRecentScore = localStorage.getItem('mostRecentScore');
// var finalScore = document.getElementById('final-score');
// finalScore.textContent = 'Your Score:' + mostRecentScore;










