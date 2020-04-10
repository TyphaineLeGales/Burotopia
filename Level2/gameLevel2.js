var button = document.querySelector("button");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);


function clickHandler() {
  playGame();
}

function playGame() {
  var testWebsite = new Website();
  testWebsite.create()
}

function endGame() {

}

function reset() {

}
