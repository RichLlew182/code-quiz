// Set of questions --> array of objects
// Each question needs the following:
// Question text
// Set of answers
// Which answer is correct

// Landing page:
// Explanation of the quiz
// Start button

var startButton = document.querySelector('#start');
var startScreen = document.querySelector('#start-screen');
var questionScreen = document.querySelector('#questions');
var questionTitle = document.querySelector('#question-title');
var choices = document.querySelector('#choices');
var feedback = document.querySelector('#feedback');
var remainingTime = 75;
var timer = document.querySelector('#time');


//  Click the start button:
//  Landing page goes away

startButton.addEventListener('click', function () {

  timer.textContent = remainingTime;

  // Timer starts

  var timerInterval = setInterval(function () {
    remainingTime--;
    timer.textContent = remainingTime;

    if (remainingTime === 0) {
      clearInterval(timerInterval);
    }

  }, 1000)

  // The first question appears (with its answers)

  startScreen.classList.add('hide')
  questionScreen.classList.toggle('hide');
  questionTitle.innerHTML = questionOne.question;


})

for (var i = 0; i < questionOne.answers.length; i++) {

  var answerButton = document.createElement('button');
  answerButton.innerText = questionOne.answers[i];
  answerButton.setAttribute('class', 'answers')
  choices.appendChild(answerButton);

  console.log(answerButton);

  // Their choice is compared to the correct answer as stored in the question's object
  // if (answerButton.innerText === 'Richard') {
  //   answerButton.setAttribute('id', 'correct');
  // }
}

var buttonAnswers = Array.from(document.querySelectorAll('#choices button'));
console.log(buttonAnswers);

function nextQuestion() {

  questionTitle.innerHTML = questionTwo.question;

  for (var j = 0; j < questionTwo.answers.length; j++) {

    buttonAnswers[j].innerText = questionTwo.answers[j];

    console.log(buttonAnswers[j]);
    // Their choice is compared to the correct answer as stored in the question's object
    // if (buttonAnswers[j].innerText === '35') {
    //   buttonAnswers[j].setAttribute('id', 'correct');
    // }
  }
}


buttonAnswers.forEach(function (button) {
  button.addEventListener('click', function () {
    feedback.classList.toggle('hide')
    if (button.innerText === 'Richard') {
      // If correct, tell them
      feedback.innerText = 'Correct';
      nextQuestion();
    } else if (button.innerText === '35') {
      // If correct, tell them
      feedback.innerText = 'Correct';
      nextQuestion();
    } else {
      // If incorrect, tell them AND subtract time from the timer
      remainingTime = remainingTime - 10;
      feedback.innerText = 'Wrong';
      nextQuestion();
    }
  })
})


// For each question:
// User clicks an answer
// Optional: play a sound for correct or incorrect
// Either way, the question disappears after a few seconds and the next question appears

// After the last question:
// Timer stops
// Question disappears
// Form appears for user to enter their initials
// Display their score

// User submits form
// Initials and score get stored in local storage
// User is taken to the high scores page
// High scores are listed, sorted highest to lowest
// User has option to take the quiz again