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
        answer: 'Mike',
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
        choice3: 'Dads Offer Money',
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

const SCORE_POINTS = 100


startQuiz = () => {
    score = 0
    getNewQuestion()

}


getNewQuestion = () => {
    if(questionsIndex === questions.length ) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
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
        score++
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






// var timeLeft = 30;
// var timeInterval = setInterval(function ());


//     function () {

//         timeLeft = 30;

//         timeInterval = setInterval(
//             function () {
//                 if (timeLeft > 0) {
//                     timerCount.textContent = timeLeft;

//                     timeLeft--;
//                     console.log("hello");
//                 } else {
//                     timerCount.textContent = timeLeft;
//                     clearInterval(timeInterval);
//                 }

//             }, 1000)
    
//         });