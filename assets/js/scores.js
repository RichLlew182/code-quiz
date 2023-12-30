var clearButton = document.querySelector('#clear');
var highScoresList = document.querySelector('#highscores');
var localStoredScore = localStorage.getItem('scoreAndInitials');


if (localStoredScore) {

  localStoredScore = JSON.parse(localStoredScore);

  // High scores are listed, sorted highest to lowest
  localStoredScore.sort(function (a, b) {
    return b.score - a.score;
  })

  for (var i = 0; i < localStoredScore.length; i++) {

    var li = document.createElement('li');
    li.innerText = `${localStoredScore[i].initials} - ${localStoredScore[i].score}`
    highScoresList.append(li);

  }


}

clearButton.addEventListener('click', function (event) {
  event.preventDefault();
  localStorage.clear();

  while (highScoresList.firstChild) {
    highScoresList.removeChild(highScoresList.firstChild)
  }

})