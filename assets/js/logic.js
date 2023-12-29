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
var buttonAnswers = [];


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
  firstQuestion()


})


function firstQuestion() {

  questionTitle.innerHTML = questionOne.question;

  for (var i = 0; i < questionOne.answers.length; i++) {

    var answerButton = document.createElement('button');
    answerButton.innerText = questionOne.answers[i];
    answerButton.setAttribute('class', 'answers-one')
    choices.appendChild(answerButton);

    console.log(answerButton);

    // Their choice is compared to the correct answer as stored in the question's object

    var buttonAnswersOne = Array.from(document.querySelectorAll('#choices button'));
    buttonAnswers = buttonAnswersOne;

  }

  buttonAnswersOne.forEach(function (button) {
    button.addEventListener('click', function () {
      feedback.classList.toggle('hide')
      if (button.innerText === 'Richard') {
        // If correct, tell them
        feedback.innerText = 'Correct';
        secondQuestion();
      } else {
        // If incorrect, tell them AND subtract time from the timer
        remainingTime = remainingTime - 10;
        feedback.innerText = 'Wrong';
        secondQuestion();
      }
    })
  })

}

function secondQuestion() {

  questionTitle.innerHTML = questionTwo.question;

  for (var j = 0; j < questionTwo.answers.length; j++) {
    buttonAnswers[j].remove()

    var answerButtonTwo = document.createElement('button');
    answerButtonTwo.innerText = questionTwo.answers[j];
    answerButtonTwo.setAttribute('class', 'answers-two')
    choices.appendChild(answerButtonTwo);

    console.log(answerButtonTwo);
  }

  var buttonAnswersTwo = Array.from(document.querySelectorAll('#choices button'));

  buttonAnswers = buttonAnswersTwo;

  buttonAnswers.forEach(function (button) {
    button.addEventListener('click', function () {
      if (button.innerText === '35') {
        // If correct, tell them
        feedback.innerText = 'Correct';
        thirdQuestion();
      } else {
        // If incorrect, tell them AND subtract time from the timer
        remainingTime = remainingTime - 10;
        feedback.innerText = 'Wrong';
        thirdQuestion();
      }
    })
  })
}

function thirdQuestion() {

  questionTitle.innerHTML = questionThree.question;

  for (var k = 0; k < questionThree.answers.length; k++) {
    buttonAnswers[k].remove()

    var answerButtonThree = document.createElement('button');
    answerButtonThree.innerText = questionThree.answers[k];
    answerButtonThree.setAttribute('class', 'answers-three')
    choices.appendChild(answerButtonThree);

    console.log(answerButtonThree);
  }

  var buttonAnswersThree = Array.from(document.querySelectorAll('#choices button'));
  buttonAnswers = buttonAnswersThree;

  buttonAnswersThree.forEach(function (button) {
    button.addEventListener('click', function () {
      if (button.innerText === 'Welsh') {
        // If correct, tell them
        feedback.innerText = 'Correct';
        fourthQuestion();
      } else {
        // If incorrect, tell them AND subtract time from the timer
        remainingTime = remainingTime - 10;
        feedback.innerText = 'Wrong';
        fourthQuestion();
      }
    })
  })
}

function fourthQuestion() {

  questionTitle.innerHTML = questionFour.question;

  for (var l = 0; l < questionFour.answers.length; l++) {
    buttonAnswers[l].remove()

    var answerButtonFour = document.createElement('button');
    answerButtonFour.innerText = questionFour.answers[l];
    answerButtonFour.setAttribute('class', 'answers-four')
    choices.appendChild(answerButtonFour);

    console.log(answerButtonFour);
  }

  var buttonAnswersFour = Array.from(document.querySelectorAll('#choices button'));
  buttonAnswers = buttonAnswersFour;

  buttonAnswersFour.forEach(function (button) {
    button.addEventListener('click', function () {
      if (button.innerText === 'Watson') {
        // If correct, tell them
        feedback.innerText = 'Correct';
        fifthQuestion();
      } else {
        // If incorrect, tell them AND subtract time from the timer
        remainingTime = remainingTime - 10;
        feedback.innerText = 'Wrong';
        fifthQuestion();
      }
    })
  })
}

function fifthQuestion() {

  questionTitle.innerHTML = questionFive.question;

  for (var m = 0; m < questionFive.answers.length; m++) {
    buttonAnswers[m].remove()

    var answerButtonFive = document.createElement('button');
    answerButtonFive.innerText = questionFive.answers[m];
    answerButtonFive.setAttribute('class', 'answers-five')
    choices.appendChild(answerButtonFive);

    console.log(answerButtonFive);
  }

  var buttonAnswersFive = Array.from(document.querySelectorAll('#choices button'));
  buttonAnswers = buttonAnswersFive;

  buttonAnswersFive.forEach(function (button) {
    button.addEventListener('click', function () {
      if (button.innerText === 'Corgi') {
        // If correct, tell them
        feedback.innerText = 'Correct';
        endGame();
      } else {
        // If incorrect, tell them AND subtract time from the timer
        remainingTime = remainingTime - 10;
        feedback.innerText = 'Wrong';
        endGame();
      }
    })
  })
}

function endGame() {

}






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