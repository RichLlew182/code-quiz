var clearButton = document.querySelector('#clear');
var highScoresList = document.querySelector('#highscores')

clearButton.addEventListener('click', function (event) {
  event.preventDefault();
  localStorage.clear();

  for (var i = 0; i < highScoresList.childElementCount; i++) {
    highScoresList.removeChild(highScoresList.lastElementChild)
  }

})

var highScores = document.querySelector('#highscores');
var li = document.createElement('li');
var localStoredScore = localStorage.getItem('scoreAndInitials');

if (localStoredScore) {

  localStoredScore = JSON.parse(localStoredScore);
  li.innerText = `${localStoredScore.initials} - ${localStoredScore.score}`
  highScores.append(li);
}