var button = document.querySelector("button");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);
var startUI = document.querySelector(".introLevel");
var unsubscribe = document.getElementById("unsubscribe");
unsubscribe.addEventListener('click', win, false);
var container = document.querySelector('div.gameContainer');
var endGameMSG = document.querySelector('.endGameMSG');
var beginningGameMSG = document.querySelector('.beginningGameMSG');
var _spacing = 50;

function clickHandler() {

  playGame();
  startUI.style.display= "none";
}

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

function playLevel2 () {
  generateGridOfCheckBox();

}

function generateGridOfCheckBox() {
  for(var i = 0; i < 3; i++ ){
    for(var j= 0; j < 3; j++) {
      var box = document.createElement("div");
      box.classList.add('box');
      console.log( i*_spacing);
      box.style.left = i*_spacing + "px";
      box.style.top = j*_spacing + "px";
      container.appendChild(box);
    }
  }
}
