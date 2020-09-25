const generatePlayerId = (length) => {
  let playerIdArray = [];
  for(let i = 0; i < length; i++) {
    playerIdArray[i] = generateCharacter();
  }
  playerID = playerIdArray[0] + playerIdArray[1] + playerIdArray[2] + playerIdArray[3] + playerIdArray[4] ;
  playerIDContainer.innerHTML = '<span class="idCard">' + playerID + "</span>";
}

const generateCharacter = () => {
  let randBinary = Math.round(Math.random());
  let isNumber = randBinary == 1 ? true : false;
  let idElement = "";

  if(isNumber) {
    idElement = "" + getRandomInt(9);
  } else {
    idElement = letters[getRandomInt(letters.length)];
  }

  return idElement ;
}
