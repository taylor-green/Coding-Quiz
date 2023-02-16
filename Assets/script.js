var timerTextEl = document.querySelector('h3');
var timerCount = document.querySelector('.timer-count');
var startButton = document.querySelector('#start-button');

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