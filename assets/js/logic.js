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
  startScreen.classList.add('hide')
  questionScreen.classList.toggle('hide');
  timer.textContent = remainingTime;
  questionTitle.innerHTML = questionOne.question;

})

for (var i = 0; i < questionOne.answers.length; i++) {

  var answerButton = document.createElement('button');
  answerButton.innerText = questionOne.answers[i];
  answerButton.setAttribute('class', 'answers')
  choices.appendChild(answerButton);

  console.log(answerButton);

  if (answerButton.innerText === 'Richard') {
    answerButton.setAttribute('id', 'correct');
  }
}

var buttonAnswers = document.querySelectorAll('#choices button');
console.log(buttonAnswers);

buttonAnswers.forEach(function (button) {
  button.addEventListener('click', function () {
    feedback.classList.toggle('hide')
    if (button.id === 'correct') {
      feedback.innerText = 'Correct'
    } else {
      feedback.innerText = 'Wrong'
    }
  })
})





// TODO Timer starts
// TODO The first question appears (with its answers)

// For each question:
// User clicks an answer
// Their choice is compared to the correct answer as stored in the question's object
// If correct, tell them
// If incorrect, tell them AND subtract time from the timer
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