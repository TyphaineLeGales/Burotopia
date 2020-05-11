var button = document.querySelector("button");
button.addEventListener("click", clickHandler, false);
const beginningScreen =  document.querySelector("div.introLevel");
const gameContainer =  document.querySelector("div.gameContainer");
var _playerHasWon = false;
const textConditions = [
  "You agree to grant Us a non-transferable option to claim, for now and for ever more, your immortal soul. Should We wish to exercise this option, you agree to surrender your immortal soul, and any claim you may have on it, within 5 (five) working days of receiving written notification from burotopia.fun or one of its duly authorized minions.",
  "You agree to enjoy the experience. However, this restriction will not apply in the event of the occurrence (certified by the United States Centers for Disease Control or successor body) of a widespread viral infection transmitted via bites or contact with bodily fluids that causes human corpses to reanimate and seek to consume living human flesh, blood, brain or nerve tissue and is likely to result in the fall of organized civilization.",
  "You agree to settle an automatic bank transfer payment and to us making it extra-difficult to get out of it so that we can increase our benefit.",
  "You also agree that you will not use this site for any purposes prohibited by United States law, including, without limitation, the development, design, manufacture, or production of nuclear, missile, or chemical or biological weapons.",
  "You agree to the use of your user activity data to determine at anytime your location, your age, your gender, your center of interests, the name of your pets, how well you get along with your father, the caloric content of the breakfast you ha d that day or any of the alike that we deem necessary to improve your user experience.",
  "You agree that disputes between you and us will be resolved by binding, individual arbitration and you waive your right to participate in a class action lawsuit or class-wide arbitration",
  "We may need to make changes to these Terms from time to time for many reasons. You should look at these Terms regularly. Any material change to these Terms will be effective automatically 30 days after the revised Terms are first posted or, for users who register or otherwise provide opt-in consent during this 30-day period, at the time of registration or consent, as applicable.",
  "You agree to take full responsability for any frustration that you might experience while navigating on Burotopia. We are hereby denying all legal binding  in case of any symptoms of nervous breakdown, depression, anxiety might occur.",
]
var numberOfBlocks = textConditions.length;
const _colors = ["#A56544", "#7C9ACD", "#336EA3", "#E2A2A1", "#B6BBBF", "#00928D", "#E19378", "#F2C600", "#E37634", "#D2693F"];


function clickHandler() {
  gameContainer.style.display = "flex";
  beginningScreen.style.display="none";
  playGame();
}

function playGame() {
  var randIndex = getRandomInt(numberOfBlocks);
  var testBlock = new Condition(textConditions[0], _colors[randIndex]);

  var counter = 0;
  function moveBlock () {
    counter ++;
    console.log(counter);
    testBlock.div.style.top = counter + "px";
    if (counter < gameContainer.offsetHeight) {
      window.requestAnimationFrame(moveBlock);
    }
  }

  window.requestAnimationFrame(moveBlock);
}

function generateBlocks () { 

}

