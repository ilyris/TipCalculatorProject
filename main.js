const billTotal = document.getElementById("bill-input");
const tipPercentage = document.getElementById("service-input");
const typedPercentage = document.getElementById("typed-percentage-input");
let numberOfPartyMembers, total, splitTotal;

function calculateTip() {
  //setting the value for the variable numberOfPartyMembers
  numberOfPartyMembers = document.getElementById("party-number").value;
  //replacing the string in element "symbol"  with the value of tipPercentage + a percent sign
  document.getElementById("symbol").innerHTML = tipPercentage.value + "%";
  //setting the total value as the billTotal * tipPercentage value divided by 100 to get the correct percentage
  total = (billTotal.value * tipPercentage.value) / 100;
  //assigning the value of whatever the total is divided by the number of party members
  splitTotal = total / numberOfPartyMembers;
  // condition to check if the party is biger than 1, and if the total is greater than 0
  if (numberOfPartyMembers > 1 && total >= 0) {
    document.querySelector(".total-tip").innerHTML =
      "Your tip per person is: $" + splitTotal.toFixed(2);
  }
  //condition to check that the bill total input has a value
  if (billTotal.value <= 0) {
    document.querySelector(".total-tip").innerHTML =
      "I can't serve my purpose unless there is a bill total, sorry";
  }
  //last condition to check that the total is larger than 0 and the number of party members is 1.
  else if (total > 0 && numberOfPartyMembers == 1) {
    document.querySelector(".total-tip").innerHTML =
      "Your tip is: $" + total.toFixed(2);
  }
}

//when event listener is fired, have each input value equal eachother and run the function calculateTip

tipPercentage.addEventListener("input", () => {
  typedPercentage.value = tipPercentage.value;
  calculateTip();
});

typedPercentage.addEventListener("input", () => {
  tipPercentage.value = typedPercentage.value;
  calculateTip();
});