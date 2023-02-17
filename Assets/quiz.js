var question = document.querySelector('#question');
var choices = document.querySelector('.choice-text');
var scoreText = document.querySelector('#score');

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
        answer: 1,
    },
    {
        question: 'What would be considered a boolean value?',
        choice1: 'A ghost',
        choice2: 'False',
        choice3: 'Ozzy Osbourne',
        choice4: '0.00998',
        answer: 2,
    },
    {
        question: 'What does DOM stand for?',
        choice1: 'Document Orientation Movement',
        choice2: 'Disable Object Model',
        choice3: 'Dads Offer Money',
        choice4: 'Document Object Model',
        answer: 4,
    },
    {
        question: 'Which of thes is a reference type?',
        choice1: 'An applications rules',
        choice2: 'Scope',
        choice3: 'An array',
        choice4: 'The DOM',
        answer: 3,
    },
    {
        question: 'When naming a variable, what cannnot be included?',
        choice1: 'Uppercase letters',
        choice2: 'Numbers',
        choice3: 'A space or hyphen',
        choice4: 'Lowercase letters',
        answer: 3,
    }
]

const SCORE_POINTS = 100


startQuiz = () => {
    score = 0
    allQuestions = [...questions]
    getNewQuestion()

}

getNewQuestion = () => {
    if(allQuestions.length === 0) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    var questionsIndex = Math.floor(Math.random() * allQuestions.length)
    currentQuestion = allQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        var number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    allQuestions.splice(questionsIndex, 1)

    acceptedAnswer = true
}

choice.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptedAnswer) return

        acceptedAnswer = false
        var selectedChoice = e.target
        var selectedAnswer = selectedChoice.dataset['number']

        if (selectedAnswer === true){
            incrementScore(SCORE_POINTS)
        }
    })

})  



    // // function () {

    //     var timeLeft = 30;

    //     var timeInterval = setInterval(
    //         function () {
    //             if (timeLeft > 0) {
    //                 timerCount.textContent = timeLeft;

    //                 timeLeft--;
    //                 console.log("hello");
    //             } else {
    //                 timerCount.textContent = timeLeft;
    //                 clearInterval(timeInterval);
    //             }

    //         }, 1000)
    // });


