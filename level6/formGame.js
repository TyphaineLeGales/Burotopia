var container = document.querySelector('div.gameContainer');
var form;
var boundingRectForm;
var offset = 100;
var _pickedElement;
var _formTargetElement;
var _formElmntArray;
var _boundRectFormTarget;
var _forms = [];

document.addEventListener('DOMContentLoaded',(event) => {
  playGame();
});

function playGame() {
  form = new Form();
  _forms.push(form);
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

  //find target element for clicked item
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
    _pickedElement.classList.remove('drag', 'sideItem');
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
    var sideItems = document.querySelectorAll('div.sideItem');
    form.container.classList.add('formCompleted');
    //pile up the forms
    form.container.style.bottom = -9 + (_forms.length-1) + "vw";
    //generate new Form
    setTimeout(playGame, 1000);
  }
}


function generateSideItems () {

  setTimeout(generatePictureSideItem, 100);
  setTimeout(generateNameSideItem, 200);
  setTimeout(generateLastNameSideItem, 300);
  setTimeout(generateAdressSideItem, 400);
  setTimeout(generateCitySideItem, 500);
  setTimeout(generateSignatureSideItem, 600);
  setTimeout(generateEmailSideItem, 700);
  // generateZipCodeSideItem();
  setTimeout(generateBlockSideItem, 800);

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
  p.innerHTML = 'NAME';
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
  p.innerHTML = 'LAST NAME';
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
  p.innerHTML = 'ADDRESS';
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
  p.innerHTML = 'CITY';
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
  signatureItem.classList.add('signature','sideItem','drag');
  var p = document.createElement('p');
  p.innerHTML = 'SIGNATURE';
  signatureItem.appendChild(p);
  container.appendChild(signatureItem);
  generateRandPos(container, signatureItem);
  signatureItem.onmouseup = e => {
    checkForMatch(e)
  }
}

function generateEmailSideItem () {
  var emailItem = document.createElement('div');
  var p = document.createElement('p');
  p.innerHTML = '@EMAIL';
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
  p.innerHTML = 'Object of request';
  blockItem.appendChild(p);
  blockItem.classList.add('block', 'sideItem', 'drag');
  container.appendChild(blockItem);
  generateRandPos(container, blockItem);
  blockItem.onmouseup = e => {
    checkForMatch(e);
  }

}

function  generateRandPos (container, div) {

  var left = randomInRange(0, container.offsetWidth - div.offsetWidth) + offset;
  if(left > boundingRectForm.right) {
    div.style.left = left  + "px";
    div.style.top = randomInRange(0, container.offsetHeight) + "px";
  } else {
    generateRandPos(container, div);
  }
}
