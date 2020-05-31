var button = document.querySelector("button");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);
var startUI = document.querySelector(".introLevel");
var container = document.querySelector('div.gameContainer');
var form;
var boundingRectForm;
var offset = 100;
function clickHandler() {

  playGame();
  startUI.style.display= "none";
}

function playGame() {
  form = new Form();
  boundingRectForm = form.container.getBoundingClientRect();
  generateSideItems();
  // generateSideItems();
  // Generate empty form
  // Generate side items
  // Dragable item
  // Check correct position
}

function generateSideItems () {

  generatePictureSideItem();
  generateNameSideItem();
  //generate rand position within game container
  //add classlist picture
  //dragable
  // console.log(rectForm.top, rectForm.right, rectForm.bottom, rectForm.left);


}

function generatePictureSideItem () {
   var pictureItem = document.createElement('div');
  pictureItem.classList.add('picture', 'sideItem','drag','pictureAsset');
  container.appendChild(pictureItem);

  generateRandPos(container, pictureItem);
}

function generateNameSideItem () {
  var nameItem = document.createElement('p');
  nameItem.innerHTML = 'Typhaine';
  nameItem.classList.add('name', 'sideItem','drag');
  container.appendChild(nameItem);

  generateRandPos(container, nameItem);
}

function  generateRandPos (container, div) {

  var left = randomInRange(0, container.offsetWidth) + offset;
  console.log(left, boundingRectForm.left);
  if(left < boundingRectForm.left - div.offsetWidth || left > boundingRectForm.right ) {
    div.style.left = left  + "px";
    div.style.top = randomInRange(0, container.offsetHeight) + "px";
  } else {
    generateRandPos(container, div);
  }
}
