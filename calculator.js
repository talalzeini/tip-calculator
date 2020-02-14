document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('totalBill').style.display = "none";
document.getElementById('eachBill').style.display = "none";

document.getElementById('Alltotal').style.display = "none";
document.getElementById('tot').style.display = "none";

function calculateTip() {

var billAmount = document.getElementById('billAmount').value;
var  serviceQuality = document.getElementById('serviceQuality').value;
var numPeople = document.getElementById('totalPeople').value;

if(billAmount == "" || serviceQuality == 0 || billAmount == 0){
  window.alert("Please enter some valid numbers in order to calculate your total.");
  return;
}
if(numPeople == "" || numPeople <=1){
    numPeople =1;
    document.getElementById('each').style.display = "none";
    document.getElementById('eachBill').style.display = "none";
    document.getElementById('tot').style.display = "none";
}else{
    document.getElementById('each').style.display = "block";
    document.getElementById('eachBill').style.display = "block";
    document.getElementById('tot').style.display = "block";
}
var total = (billAmount * serviceQuality) / numPeople;
total = Math.round(total * 100) / 100;
total = total.toFixed(2);

document.getElementById('totalTip').style.display = "block";
document.getElementById('tip').innerHTML = total;

var result = (billAmount / numPeople);
result = Math.round(result * 100) / 100;
result = result.toFixed(2);


document.getElementById('totalBill').style.display = "block";
document.getElementById('bill').innerHTML = result;

var tot = ((billAmount * serviceQuality) / numPeople) +  (billAmount / numPeople);
tot = Math.round(tot * 100) / 100;
tot = tot.toFixed(2);

document.getElementById('Alltotal').style.display = "block";
document.getElementById('total').innerHTML = tot;

}

