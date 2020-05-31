var button = document.querySelector("button");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);
var startUI = document.querySelector(".introLevel");
var container = document.querySelector('div.gameContainer');
var form;
var offset = 50;
var testBtn = document.querySelector('button.testBtn');
testBtn.addEventListener('click', generateSideItems, false);
function clickHandler() {

  playGame();
  startUI.style.display= "none";
}

function playGame() {
  form = new Form();
  // generateSideItems();
  // Generate empty form
  // Generate side items
  // Dragable item
  // Check correct position
}

function generateSideItems () {
var pictureItem = document.createElement('div');
  pictureItem.classList.add('picture');
  pictureItem.classList.add('sideItem');
  container.appendChild(pictureItem);
  generateRandPos(container, pictureItem);
    console.log(pictureItem);
  //generate rand position within game container
  //add classlist picture
  //dragable

}

function  generateRandPos (container, div) {

    div.style.left = randomInRange(0, container.offsetWidth - offset) + "px";
    div.style.top = randomInRange(0, container.offsetHeight) + "px";
  }
