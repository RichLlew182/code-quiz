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
var endScreen = document.querySelector('#end-screen');
var finalScore = document.querySelector('#final-score');
var remainingTime = 75;
var penalty = 10;
var timer = document.querySelector('#time');
var buttonAnswers = [];
var timerInterval;


//  Click the start button:
//  Landing page goes away

startButton.addEventListener('click', function () {

  timer.textContent = remainingTime;

  // Timer starts

  timerInterval = setInterval(function () {
    remainingTime--;
    timer.textContent = remainingTime;

    if (remainingTime < 10) {
      penalty = (remainingTime - 1);
    }

    if (remainingTime <= 0) {
      clearInterval(timerInterval);
      endGame();
    }

  }, 1000)

  // The first question appears (with its answers)

  startScreen.classList.add('hide')
  questionScreen.classList.toggle('hide');
  firstQuestion();
  return timerInterval;

})

// For each question:
// User clicks an answer
// Optional: play a sound for correct or incorrect
// Either way, the question disappears after a few seconds and the next question appears

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
        setTimeout(function () {
          secondQuestion();
        }, 1000)
      } else {
        // If incorrect, tell them AND subtract time from the timer
        remainingTime = remainingTime - penalty;
        feedback.innerText = 'Wrong';
        setTimeout(function () {
          secondQuestion();
        }, 1000)
      }
    })
  })

}

function secondQuestion() {

  questionTitle.innerHTML = questionTwo.question;
  feedback.classList.toggle('hide');

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
        feedback.classList.toggle('hide');
        feedback.innerText = 'Correct';
        setTimeout(function () {
          thirdQuestion();
        }, 1000)
      } else {
        // If incorrect, tell them AND subtract time from the timer
        remainingTime = remainingTime - penalty;
        feedback.classList.toggle('hide');
        feedback.innerText = 'Wrong';
        setTimeout(function () {
          thirdQuestion();
        }, 1000)
      }
    })
  })
}

function thirdQuestion() {

  questionTitle.innerHTML = questionThree.question;
  feedback.classList.toggle('hide');

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
        feedback.classList.toggle('hide');
        feedback.innerText = 'Correct';
        setTimeout(function () {
          fourthQuestion();
        }, 1000)
      } else {
        // If incorrect, tell them AND subtract time from the timer
        remainingTime = remainingTime - penalty;
        feedback.classList.toggle('hide');
        feedback.innerText = 'Wrong';
        setTimeout(function () {
          fourthQuestion();
        }, 1000)
      }
    })
  })
}

function fourthQuestion() {

  questionTitle.innerHTML = questionFour.question;
  feedback.classList.toggle('hide');

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
        feedback.classList.toggle('hide');
        feedback.innerText = 'Correct';
        setTimeout(function () {
          fifthQuestion();
        }, 1000)
      } else {
        // If incorrect, tell them AND subtract time from the timer
        remainingTime = remainingTime - penalty;
        feedback.classList.toggle('hide');
        feedback.innerText = 'Wrong';
        setTimeout(function () {
          fifthQuestion();
        }, 1000)
      }
    })
  })
}

function fifthQuestion() {

  questionTitle.innerHTML = questionFive.question;
  feedback.classList.toggle('hide');

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
      if (button.innerText === 'Pembroke Welsh Corgi') {
        // If correct, tell them
        feedback.classList.toggle('hide');
        feedback.innerText = 'Correct';
        clearInterval(timerInterval);
        setTimeout(function () {
          endGame();
        }, 1000)
      } else {
        // If incorrect, tell them AND subtract time from the timer
        remainingTime = remainingTime - penalty;
        feedback.classList.toggle('hide');
        feedback.innerText = 'Wrong';
        setTimeout(function () {
          clearInterval(timerInterval);
          endGame();
        }, 1000)
      }
    })
  })
}

function endGame() {

  // After the last question:
  // Timer stops
  // Question disappears
  // Form appears for user to enter their initials
  // Display their score

  questionScreen.classList.toggle('hide');
  feedback.style.display = 'none'
  finalScore.innerText = remainingTime;
  endScreen.classList.toggle('hide');

}

// endScreen.classList.toggle('hide');

var submitButton = document.querySelector('#submit');
var initials = document.querySelector('#initials');

submitButton.addEventListener('click', function (event) {
  event.preventDefault();

  if (!initials.value) {
    alert('You must enter your initials')
  } else if (initials.value.length > 3) {
    alert('Must be 3 or less characters')
  } else {
    console.log(initials.value);

    localStorage.setItem('initials', initials.value);
    localStorage.setItem('final-score', finalScore.innerText);
  }

})

// User submits form
// Initials and score get stored in local storage
// User is taken to the high scores page
// High scores are listed, sorted highest to lowest
// User has option to take the quiz again