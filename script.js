function calculateTip() {
  var billAmount = document.getElementById("billAmount").value;
  var serviceQuality = document.getElementById("serviceQuality").value;
  var numberOfPeople = document.getElementById("totalPeople").value;

  if ((billAmount == "" && serviceQuality == 0) || billAmount == 0) {
    window.alert(
      "Please enter some valid numbers in order to calculate your total."
    );
    return;
  }
  // if bill amount is not a number
  if (isNaN(document.getElementById("billAmount").value)) {
    window.alert("Please enter a valid bill amount.");
    return;
  }
  if (isNaN(numberOfPeople)) {
    window.alert("Please enter a valid number of people.");
    return;
  }
  if (billAmount >= 999999) {
    window.alert("You probably don't have this kind of money. Good Luck.");
    return;
  }
  if (numberOfPeople == "" || numberOfPeople <= 1) {
    numberOfPeople = 1;
  }
  var totalTip = (billAmount * serviceQuality) / numberOfPeople;
  totalTip = Math.round(totalTip * 100) / 100;
  totalTip = totalTip.toFixed(2);
  document.getElementById("tip").innerHTML = totalTip;

  var billWithoutTip = billAmount / numberOfPeople;
  billWithoutTip = Math.round(billWithoutTip * 100) / 100;
  billWithoutTip = billWithoutTip.toFixed(2);
  document.getElementById("bill").innerHTML = billWithoutTip;

  var totalAmount =
    (billAmount * serviceQuality) / numberOfPeople +
    billAmount / numberOfPeople;
  totalAmount = Math.round(totalAmount * 100) / 100;
  totalAmount = totalAmount.toFixed(2);

  document.getElementById("total").innerHTML = totalAmount;
  document.getElementById("result").classList.remove("hide");
  document.getElementById("calculator").classList.add("hide");
}
