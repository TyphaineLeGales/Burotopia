var button = document.querySelector("button");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);
var startUI = document.querySelector(".introLevel");
var container = document.querySelector('div.gameContainer');
var form;
var boundingRectForm;
var offset = 100;
var _pickedElement;
var _formTargetElement;
var _formElmntArray;
var _boundRectFormTarget;

function clickHandler() {

  playGame();
  startUI.style.display= "none";
}

function playGame() {
  form = new Form();
  _formElmntArray = form.container.children;
  boundingRectForm = form.container.getBoundingClientRect();
  generateSideItems();

}

function checkForMatch (e) {

  if(e.target.tagName === "P") {
    _pickedElement = e.target.parentElement;
  } else {
    _pickedElement = e.target;
  }
  var elmntName = _pickedElement.classList[0];

  //find target form element for clicked item
  for(var i = 0; i < _formElmntArray.length; i++) {
    if(_formElmntArray[i].classList[0] === _pickedElement.classList[0]) {
       _formTargetElement = _formElmntArray[i];
       break;
    }
  }

  //get position of target
  _boundRectFormTarget = _formTargetElement.getBoundingClientRect();
  var mouseX = e.clientX;
  var mouseY = e.clientY;

  //check if item is droped at target position
  if(mouseX > _boundRectFormTarget.left && mouseX < _boundRectFormTarget.right ) {
    if(mouseY > _boundRectFormTarget.top && mouseY < _boundRectFormTarget.bottom) {
     _formTargetElement.classList.add('formItemCompleted');
     _pickedElement.style.top = _boundRectFormTarget.top +'px';
     _pickedElement.style.left =  _boundRectFormTarget.left+'px';

     _formTargetElement.appendChild(_pickedElement);

      checkForWin();
    }
  }
}

function checkForWin() {
  var completedItemCount = 0;
  for(var i = 0; i < _formElmntArray.length; i++) {
    if(_formElmntArray[i].classList[2] === 'formItemCompleted') {
      completedItemCount += 1;
    }
  }

  //check if every item of form has been completed
  if(completedItemCount === _formElmntArray.length) {
    console.log('form is completed');
    var sideItems = document.querySelectorAll('div.sideItem');
    console.log(sideItems);
    form.container.classList.add('formCompleted');
    // sideItem.forEach(e => e.classList.add('formCompleted'));
    // sideItems.forEach(e =>  e.classList.add('formCompleted'));


  }

}


function generateSideItems () {

  generatePictureSideItem();
  generateNameSideItem();
  generateLastNameSideItem();
  generateAdressSideItem();
  generateCitySideItem();
  generateSignatureSideItem();
  generateEmailSideItem();
  // generateZipCodeSideItem();
  generateBlockSideItem();

}

function generatePictureSideItem () {
  var pictureItem = document.createElement('div');
  pictureItem.classList.add('picture', 'sideItem','drag','pictureAsset');
  container.appendChild(pictureItem);

  generateRandPos(container, pictureItem);
  pictureItem.onmouseup = e => {
    checkForMatch(e)
  }
}

function generateNameSideItem () {
  var nameItem = document.createElement('div');
  var p = document.createElement('p');
  p.innerHTML = 'TYPHAINE';
  nameItem.appendChild(p);
  nameItem.classList.add('name', 'sideItem','drag');
  container.appendChild(nameItem);
  generateRandPos(container, nameItem);
  nameItem.onmouseup = e => {
    checkForMatch(e)
  }
}

function generateLastNameSideItem () {
  var lastNameItem = document.createElement('div');
  var p = document.createElement('p');
  p.innerHTML = 'LE GALES';
  lastNameItem.appendChild(p);
  lastNameItem.classList.add('lastName', 'sideItem','drag');
  container.appendChild(lastNameItem);
  generateRandPos(container, lastNameItem);
  lastNameItem.onmouseup = e => {
    checkForMatch(e)
  }
}

function generateAdressSideItem () {
  var adressItem = document.createElement('div');
  var p = document.createElement('p');
  p.innerHTML = '187 STRIJPSESTRAAT';
  adressItem.appendChild(p);
  adressItem.classList.add('address', 'sideItem','drag');
  container.appendChild(adressItem);
  generateRandPos(container, adressItem);
  adressItem.onmouseup = e => {
    checkForMatch(e)
  }
}

function generateCitySideItem () {
  var cityItem = document.createElement('div');
  var p = document.createElement('p');
  p.innerHTML = 'EINDHOVEN';
  cityItem.appendChild(p);
  cityItem.classList.add('city', 'sideItem','drag');
  container.appendChild(cityItem);
  generateRandPos(container, cityItem);
  cityItem.onmouseup = e => {
    checkForMatch(e)
  }
}

function generateSignatureSideItem () {
  var signatureItem = document.createElement('div');
  signatureItem.classList.add('signature','signatureAsset', 'sideItem','drag');
  container.appendChild(signatureItem);
  generateRandPos(container, signatureItem);
  signatureItem.onmouseup = e => {
    checkForMatch(e)
  }
}

function generateEmailSideItem () {
  var emailItem = document.createElement('div');
  var p = document.createElement('p');
  p.innerHTML = 'typhaineLeGales@protonMail.com';
  emailItem.appendChild(p);
  emailItem.classList.add('email', 'sideItem','drag');
  container.appendChild(emailItem);
  generateRandPos(container, emailItem);
  emailItem.onmouseup = e => {
    checkForMatch(e)
  }
}

function generateBlockSideItem () {
  var emailItem = document.createElement('div');
  var p = document.createElement('p');
  p.innerHTML = 'typhaineLeGales@protonMail.com';
  emailItem.appendChild(p);
  emailItem.classList.add('email', 'sideItem','drag');
  container.appendChild(emailItem);
  generateRandPos(container, emailItem);
  emailItem.onmouseup = e => {
    checkForMatch(e)
  }
}

// function generateZipCodeSideItem () {
//   var zipItem = document.createElement('div');
//   var p = document.createElement('p');
//   p.innerHTML = '5616GP';
//   zipItem.classList.add('zip', 'sideItem','drag');
//   zipItem.style.backgroundColor = "blue";
//   container.appendChild(zipItem);
//   generateRandPos(container, zipItem);
//   zipItem.onmouseup = e => {
//     checkForMatch(e)
//   }

// }

function generateBlockSideItem () {
  var blockItem = document.createElement('div');
  var p = document.createElement('p');
  p.innerHTML = 'block';
  blockItem.appendChild(p);
  blockItem.classList.add('block', 'sideItem', 'drag');
  container.appendChild(blockItem);
  generateRandPos(container, blockItem);
  blockItem.onmouseup = e => {
    checkForMatch(e);
  }

}

function  generateRandPos (container, div) {

  var left = randomInRange(0, container.offsetWidth) + offset;
  if(left < boundingRectForm.left - div.offsetWidth || left > boundingRectForm.right ) {
    div.style.left = left  + "px";
    div.style.top = randomInRange(0, container.offsetHeight) + "px";
  } else {
    generateRandPos(container, div);
  }
}
