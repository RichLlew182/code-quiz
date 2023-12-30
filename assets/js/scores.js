var clearButton = document.querySelector('#clear');
var highScoresList = document.querySelector('#highscores');

clearButton.addEventListener('click', function (event) {
  event.preventDefault();
  localStorage.clear();

  for (var i = 0; i < highScoresList.childElementCount; i++) {
    highScoresList.removeChild(highScoresList.lastElementChild)
  }

})

var localStoredScore = localStorage.getItem('scoreAndInitials');

if (localStoredScore) {

  localStoredScore = JSON.parse(localStoredScore);

  for (var i = 0; i < localStoredScore.length; i++) {
    var li = document.createElement('li');
    li.innerText = `${localStoredScore[i].initials} - ${localStoredScore[i].score}`
    highScoresList.append(li);

  }

}