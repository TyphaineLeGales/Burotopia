import Desk from './Desk.js'

function generateDesks(number, playerID) {
  let desks = [];

  for(let i=0; i < number; i++) {
    let desk = new Desk();
    desks.push(desk);
  }

  //add desk with same id that is closed
  var randomIndex = getRandomInt(desks.length);

  var closedDeskSameId = desks[randomIndex];
  closedDeskSameId.index = randomIndex;
  closedDeskSameId.number = playerID;
  closedDeskSameId.state = "closed";
  closedDeskSameId.isTheAnswer = false;

  for(var i = 0; i< desks.length; i++) {
    let desk = desks[i];
    desk.index = i;
    if(desk.number != playerID){
      //Generate random state
      var randBinary = Math.round(Math.random());
      desk.state = randBinary ? "closed" : "open";

      //Generate random id with same character as players ID
      for(var j = 0; j < playerID.length; j++) {
        desk.number[j] = playerID[getRandomInt(playerID.length)];
      }
    }
    desk.create();

  }
  return desks
}

export default generateDesks
