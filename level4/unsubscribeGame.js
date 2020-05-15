var button = document.querySelector("button");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);
var startUI = document.querySelector(".introLevel");
var unsubscribe = document.getElementById("unsubscribe");

function clickHandler() {
  console.log("function is called");
  playGame();
  startUI.style.display= "none";
}

function playGame() {
  unsubscribe.style.display = "block";
}
