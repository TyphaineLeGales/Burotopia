const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const generatePlayerId = (length) => {
  let playerIdArray = [];
  for(let i = 0; i < length; i++) {
    playerIdArray[i] = generateCharacter();
  }
  return playerIdArray.join('');
}

const generateCharacter = () => {
  let randBinary = Math.round(Math.random());
  let isNumber = randBinary == 1 ? true : false;
  let idElement = "";

  idElement = isNumber ? "" + getRandomInt(9) : letters[getRandomInt(letters.length)];
  return idElement ;
}

const setPlayerId = (id, container) => container.innerHTML = '<span class="idCard">' + id + "</span>";

export {generatePlayerId, setPlayerId}
