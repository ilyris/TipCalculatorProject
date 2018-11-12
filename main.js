const billTotal = document.getElementById('bill-input');
const tipPercentage = document.getElementById('service-input');
let percentageText = document.getElementById('symbol').innerHTML;
// console.log(percentageText);

tipPercentage.addEventListener("input", function(value) {
    let tipPercentValue = tipPercentage.value;
    percentageText.replace('0%', tipPercentValue);
    console.log(tipPercentValue);
    console.log(percentageText);
});
