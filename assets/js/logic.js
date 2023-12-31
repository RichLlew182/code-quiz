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
var correctAudio = new Audio('./assets/sfx/correct.wav');
var wrongAudio = new Audio('./assets/sfx/incorrect.wav');

var i = -1;

//  Click the start button:
//  Landing page goes away

startButton.addEventListener('click', function () {

  timer.textContent = remainingTime;

  // Timer starts

  timerInterval = setInterval(function () {
    remainingTime--;
    timer.textContent = remainingTime;

    if (remainingTime <= 10) {
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
  nextQuestion();
  return remainingTime;

})

// For each question:
// User clicks an answer
// Optional: play a sound for correct or incorrect
// Either way, the question disappears after a few seconds and the next question appears

function nextQuestion() {

  i++;
  choices.innerHTML = '';

  questionTitle.innerHTML = qAndAs[i].question;

  for (var j = 0; j < qAndAs[i].answers.length; j++) {

    var createButtons = document.createElement('button');
    createButtons.innerText = qAndAs[i].answers[j];
    createButtons.setAttribute('class', 'answers-' + (i + 1));
    choices.appendChild(createButtons);
  }

  buttonAnswers = Array.from(document.querySelectorAll('#choices button'));

  buttonAnswers.forEach(function (button) {
    button.addEventListener('click', function () {

      feedback.classList.toggle('hide')

      if (i < 4) {
        if (button.innerText === 'HyperText Markup Language' ||
          button.innerText === 'JavaScript' ||
          button.innerText === 'Cascading Style Sheets' ||
          button.innerText === 'Git') {
          // If correct, tell them
          correctAudio.play();
          feedback.innerText = 'Correct';
          setTimeout(function () {
            feedback.classList.toggle('hide')
            nextQuestion();
          }, 1000)
        } else {
          // If incorrect, tell them AND subtract time from the timer
          remainingTime -= penalty;
          wrongAudio.play();
          feedback.innerText = 'Wrong';
          setTimeout(function () {
            feedback.classList.toggle('hide')
            nextQuestion();
          }, 1000)
        }
      } else if (i = 4) {
        if (button.innerText === 'Create a division or a section') {
          correctAudio.play();
          feedback.innerText = 'Correct';
          // After the last question:
          // Timer stops
          clearInterval(timerInterval);
          feedback.classList.toggle('hide')
          setTimeout(function () {
            endGame();
          }, 1000)
        } else {
          remainingTime -= penalty;
          wrongAudio.play();
          feedback.innerText = 'Wrong';
          feedback.classList.toggle('hide')
          setTimeout(function () {
            // After the last question:
            // Timer stops
            clearInterval(timerInterval);
            endGame();
          }, 1000)
        }

      }

    })
  })

}

function endGame() {

  // Question disappears
  // Display their score
  if (questionScreen.className === '') {
    questionScreen.classList.toggle('hide')
  }

  // Form appears for user to enter their initials
  if (endScreen.className === '') {
    endScreen.classList.toggle('hide');
  }

  endScreen.classList.toggle('hide');
  finalScore.innerText = remainingTime;

}

var submitButton = document.querySelector('#submit');
var initials = document.querySelector('#initials');
var existingStoredScore = JSON.parse(localStorage.getItem('scoreAndInitials')) || [];

// User submits form
submitButton.addEventListener('click', function (event) {
  event.preventDefault();

  if (!initials.value.trim()) {
    alert('You must enter your initials')
  } else if (initials.value.trim().length > 3) {
    alert('Must be 3 or fewer characters')
  } else {

    var newScore = {
      initials: initials.value.trim(),
      score: finalScore.innerText
    }

    existingStoredScore.push(newScore);
    // Initials and score get stored in local storage
    localStorage.setItem('scoreAndInitials', JSON.stringify(existingStoredScore));

    // User is taken to the high scores page
    window.location.href = './highscores.html'

  }

})