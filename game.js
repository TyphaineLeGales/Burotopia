var mysteryNumber = 50;
var playersGuess =0;

var input = document.querySelector('#input');
var output = document.querySelector('#output');

var button = document.querySelector('button');
button.style.cursor= 'pointer';

console.log(button);
button.addEventListener("click", clickHandler, false);

function clickHandler() {
  playGame();

}

function playGame()  {
  playersGuess = parseInt(input.value);

  if(playersGuess > mysteryNumber) {
    output.innerHTML = "that's too high.";
  } else if(playersGuess < mysteryNumber) {
    output.innerHTML = "that's too low."
  } else if (playersGuess === mysteryNumber) {
    output.innerHTML = "you got it!";
  }
}
