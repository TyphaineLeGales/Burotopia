const randomizeStateDesk =(desk) => {
  changeState(desk);
}

const randDeskCustomer = (desk) => {
  let timeAtDesk = desk.customerLife+3000;
  if(desk.state === "open") {
    desk.hasACustomer = true;
    desk.customerUpdate();
    setTimeout(customerGoesOutDesk, timeAtDesk);
    function customerGoesOutDesk() {
      desk.customer.classList.add('customerPopOut');
    }
    setTimeout(customerIsRemoved, timeAtDesk + 450);
    function customerIsRemoved () {
      desk.hasACustomer = false;
      desk.customerUpdate();
      desk.customer.classList.remove('customerPopOut');
    }
  }
}

const randomizeId = (desk, playerID) => {
  if(desk.state === "open") {
    desk.number = Array.from(desk.number).map(char => playerID[getRandomInt(desk.number.length)]).join('');
    desk.setId();
    desk.displayTextEmployee(desk.textEmployee, "Next Please !");
  }
}

const changeState = (desk) => {
  if(desk.state === "open") {
    desk.closeDoors();
    desk.state= "closed";
    desk.setState();
  } else if (desk.state === "closed") {
    desk.openDoors();
    desk.state ="open";
    desk.setState();
  }
}

export {randomizeStateDesk, randDeskCustomer, randomizeId}
