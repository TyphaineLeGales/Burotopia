var tasks = ["bank", "phoneContract", "streaming", "socialMedia"];
var taskContainer = document.querySelector("#tasksList");
var button = document.querySelector("button");
var gameContainer =  document.querySelector("div.gameContainer");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);

// TO DO :
// - implement taskList logic click => triggers popUp website
// - implement reset link logic
// - design layout + websites content

function clickHandler() {
  gameContainer.style.display = "flex";
  button.style.display="none";
  playGame();
}

function playGame() {
  //generate listOfTasks
  //generate an email
  //several emails ?
  //on taskItemClick => create corresponding website
  //in the beginning => player doesn't know his email => needs to check the emailIcon + the player hasn't enter any password => need to click I forgot my password
  //if userName & passWord
  //add tasks as the player goes along
  //possibility to drag and drop windows
  generateTasks();

}

function generateTasks () {
  for(var i = 0; i < tasks.length; i++) {
    var task = tasks[i];
    var listElement = document.createElement("li");
    listElement.innerHTML = task;
    taskContainer.appendChild(listElement);

  }
}

function endGame() {

}

function reset() {

}
