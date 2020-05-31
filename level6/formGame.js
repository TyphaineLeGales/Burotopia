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
  generateLastNameSideItem();
  generateAdressSideItem();
  generateCitySideItem();
  generateSignatureSideItem();
  generateEmailSideItem();
  // generateZipCodeSideItem();

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
  var nameItem = document.createElement('div');
  var p = document.createElement('p');
  p.innerHTML = 'TYPHAINE';
  nameItem.appendChild(p);
  nameItem.classList.add('name', 'sideItem','drag');
  container.appendChild(nameItem);

  generateRandPos(container, nameItem);
}

function generateLastNameSideItem () {
  var lastNameItem = document.createElement('div');
  var p = document.createElement('p');
  p.innerHTML = 'LE GALES';
  lastNameItem.appendChild(p);
  lastNameItem.classList.add('lastName', 'sideItem','drag');
  container.appendChild(lastNameItem);

  generateRandPos(container, lastNameItem);
}

function generateAdressSideItem () {
  var adressItem = document.createElement('div');
  var p = document.createElement('p');
  p.innerHTML = '187 STRIJPSESTRAAT';
  adressItem.appendChild(p);
  adressItem.classList.add('name', 'sideItem','drag');
  container.appendChild(adressItem);

  generateRandPos(container, adressItem);
}

function generateCitySideItem () {
  var cityItem = document.createElement('div');
  var p = document.createElement('p');
  p.innerHTML = 'EINDHOVEN';
  cityItem.appendChild(p);
  cityItem.classList.add('city', 'sideItem','drag');
  container.appendChild(cityItem);

  generateRandPos(container, cityItem);
}

function generateSignatureSideItem () {
  var signatureItem = document.createElement('div');
  signatureItem.classList.add('signature','signatureAsset', 'sideItem','drag');
  container.appendChild(signatureItem);

  generateRandPos(container, signatureItem);
}

function generateEmailSideItem () {
  var emailItem = document.createElement('div');
  var p = document.createElement('p');
  p.innerHTML = 'typhaineLeGales@protonMail.com';
  emailItem.appendChild(p);
  emailItem.classList.add('email', 'sideItem','drag');
  container.appendChild(emailItem);

  generateRandPos(container, emailItem);
}

// function generateZipCodeSideItem () {
//   for(var i = 0; i< 6; i++) {
//       var zipItem = document.createElement('div');
//       var box = document.createElement('p');
//       box.classList.add('zipBox', 'sideItem', 'drag');
//       box.style.left = i*2 +  "vw";
//       box.innerHTML = i;
//       generateRandPos(container, box);
//       zipItem.appendChild(box);
//       container.appendChild(zipItem);
//     }
//   // zipItem.classList.add('zip', 'sideItem','drag');
//   // container.appendChild(zipItem);

// }

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
