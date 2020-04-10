var button = document.querySelector("button");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);

// TO DO :
// - implement taskList logic click => triggers popUp website
// - implement reset link logic
// - design layout + websites content

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
