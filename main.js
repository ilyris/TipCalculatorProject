
const billTotal = document.getElementById('bill-input');
const tipPercentage = document.getElementById('service-input');
// let percentageText = document.getElementById('symbol').innerHTML;
// console.log(percentageText);

tipPercentage.addEventListener("input", function(value) {
    // let tipPercentValue = tipPercentage.value;
    document.getElementById('symbol').innerHTML = tipPercentage.value + "%";
    // console.log(tipPercentValue);
    // console.log(percentageText);
});
