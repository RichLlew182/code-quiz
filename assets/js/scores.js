var clearButton = document.querySelector('#clear')

clearButton.addEventListener('click', function (event) {
  event.preventDefault();
  localStorage.clear();
})