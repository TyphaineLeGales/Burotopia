var button = document.querySelector("button");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);
var startUI = document.querySelector(".introLevel");
var container = document.querySelector('div.gameContainer');
var form;
var boundingRectForm;
var offset = 100;
var testBtn = document.querySelector('button.testBtn');
testBtn.addEventListener('click', generateSideItems, false);
function clickHandler() {

  playGame();
  startUI.style.display= "none";
}

function playGame() {
  form = new Form();
  boundingRectForm = form.container.getBoundingClientRect();
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

  //generate rand position within game container
  //add classlist picture
  //dragable
  // console.log(rectForm.top, rectForm.right, rectForm.bottom, rectForm.left);


}

function  generateRandPos (container, div) {

  var left = randomInRange(0, container.offsetWidth) + offset;
  console.log(left, boundingRectForm.left);
  if(left < boundingRectForm.left - div.offsetWidth || left > boundingRectForm.right  ) {
    div.classList.add('pictureAsset');
  } else {
    // generateRandPos(container, div);
    div.style.backgroundColor = "red";
    console.log("item is on top of form");
  }

  div.style.left = left  + "px";
  // var top = randomInRange(0, container.offsetHeight) + "px";

  div.style.top = randomInRange(0, container.offsetHeight) + "px";

  }
