const generateAnswerDesk = (desk, playerID) => {

  desk.number = playerID;
  desk.setId();
  desk.state = "open";
  desk.setState();
  desk.openDoors();
  desk.hasACustomer = true;
  desk.customerUpdate();
  console.log("answer desk has been created");
}

export default generateAnswerDesk
