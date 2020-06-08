var unsubscribe = document.getElementById("unsubscribe");
unsubscribe.addEventListener('click', win, false);
var container = document.querySelector('div.gameContainer');
var endGameMSG = document.querySelector('.endGameMSG');
var beginningGameMSG = document.querySelector('.beginningGameMSG');
var _spacing = 50;

document.addEventListener('DOMContentLoaded',(event) => {
  playGame();
});

function playGame() {
  generateRandPos();
  unsubscribe.style.display = "block";
  beginningGameMSG.style.display = "block";
  setTimeout(fadeOutStartMSG, 2000);
}

function fadeOutStartMSG () {
  beginningGameMSG.classList.add('fadeOut');
  setTimeout(msgDisplayNone, 2000);

  function msgDisplayNone () {
    beginningGameMSG.style.display = "none";
  }
}

function generateRandPos() {
  var minMarginRight = 100;
  var minMarginBottom = 100;
  var randLeft = getRandomInt(container.offsetWidth - minMarginRight);
  var randTop = getRandomInt(container.offsetHeight - minMarginBottom);
  unsubscribe.style.left = randLeft + "px";
  unsubscribe.style.top = randTop + "px";
}

function win () {
  endGameMSG.style.display = "block";
  setTimeout(endOfGame, 3000);

}

function endOfGame() {
  unsubscribe.style.display = "none";
  endGameMSG.style.display = "none";
  playGame();
}

