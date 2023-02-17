var question = document.querySelector('#question');
var choices = document.querySelector('.choice-text');
var scoreText = document.querySelector('#score');

var currentQuestion = {}
var acceptedAnswer = true
var score = 0
var questionCounter = 0
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


startButton.addEventListener('click',
    function () {

        var timeLeft = 30;

        var timeInterval = setInterval(
            function () {
                if (timeLeft > 0) {
                    timerCount.textContent = timeLeft;

                    timeLeft--;
                    console.log("hello");
                } else {
                    timerCount.textContent = timeLeft;
                    clearInterval(timeInterval);
                }

            }, 1000)
    });

var question = {
    title: "Which of the following is considered a string?",
    choices: ["'Mike'", "13", "True", "0.4376"],
    correctAnswer: 0
};

function showQuestion(q) {
    // select DOM element to modify
    var titleDiv = document.getElementById('title');

    // modify element
    titleDiv.textContent = q.title;

    // select by query
    var choice = document.querySelectorAll(".choices");
    console.log(choice);

    choice.forEach(function (element, index) {
        element.textContent = q.choices[index];

        element.addEventListener('click', function(){
            if(q.correctAnswer == index) {
            console.log('Correct!');
        } else {
            console.log('Wrong!');
        }
    });
  });
}
showQuestion(question);

var btn = document.getElementById('btn');
btn.addEventListener('click', function() {

});

