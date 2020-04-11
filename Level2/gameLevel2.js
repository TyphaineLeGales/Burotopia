var tasks = ["bank", "phoneContract", "streaming", "socialMedia"];
var taskContainer = document.querySelector("#tasksList");
var button = document.querySelector("button");
var gameContainer =  document.querySelector("div.gameContainer");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);

// TO DO :
// - implement reset link logic
// - design layout + websites content
  //generate listOfTasks
  //generate an email
  //several emails ?
  //if user name is empty => userInput = userName
  //generate the pages on a random position
  //on taskItemClick => create corresponding website
  //in the beginning => player doesn't know his email => needs to check the emailIcon + the player hasn't enter any password => need to click I forgot my password
  //if userName & passWord
  //add tasks as the player goes along

function clickHandler() {
  gameContainer.style.display = "flex";
  button.style.display="none";
  playGame();
}

function playGame() {
  generateTasks();
  taskContainer.onclick = e => {
    testFunction(e);
    var siteWindow = new Website();
  }
  // returnIndexOfTask();

}

//need to create html divs for each task task class ?
function returnIndexOfTask () {
  for(var i = 0; i < tasks.length; i++) {
    tasks[i].onclick() = function () {
      console.log()
    }
  }
}

function generateTasks () {
  for(var i = 0; i < tasks.length; i++) {
    var task = tasks[i];
    var listElement = document.createElement("li");
    listElement.innerHTML = task;
    taskContainer.appendChild(listElement);

  }
}

function testFunction (e) {
  console.log(e.target.childNodes[0]);
}

function endGame() {

}

function reset() {

}
