
const billTotal = document.getElementById('bill-input');
const tipPercentage = document.getElementById('service-input');
const  typedPercentage = document.getElementById('label-for-typed-percentage');
// let percentageText = document.getElementById('symbol').innerHTML;
// console.log(percentageText);
let total;


tipPercentage.addEventListener("input", function() {
    document.getElementById('symbol').innerHTML = tipPercentage.value + "%";

    total = billTotal.value * tipPercentage.value / 100;

    if( billTotal.value <= 0)     {
        document.querySelector('.total-tip').innerHTML = "I can't serve my purpose unless there is a bill total, sorry";
    } else if(total >= 0) {
        document.querySelector('.total-tip').innerHTML = "Your tip is: $" + total.toFixed(2); 
    }
});
