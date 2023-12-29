var clearButton = document.querySelector('#clear')

clearButton.addEventListener('click', function (event) {
  event.preventDefault();
  localStorage.clear();
})

var highScores = document.querySelector('#highscores');
var li = document.createElement('li');
var existingStoredScore = localStorage.getItem('highScore');

if (existingStoredScore) {

  existingStoredScore = JSON.parse(existingStoredScore);
  li.innerText = `${existingStoredScore.initials} - ${existingStoredScore.score}`
  highScores.append(li);
}