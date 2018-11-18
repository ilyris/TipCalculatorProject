const billTotal = document.getElementById('bill-input');
const tipPercentage = document.getElementById('service-input');
const typedPercentage = document.getElementById('typed-percentage-input');
let numberOfPartyMembers = document.getElementById('party-number');
let total;

tipPercentage.addEventListener("input", () => {
    typedPercentage.value = tipPercentage.value;    
    document.getElementById('symbol').innerHTML = tipPercentage.value + "%";
    total = billTotal.value * tipPercentage.value / 100;
    numberOfPartyMembers += parseInt(numberOfPartyMembers.value);
        if(numberOfPartyMembers > 1) {
        total = total /  numberOfPartyMembers;
        document.querySelector('.total-tip').innerHTML = "Your tip is: $" + total.toFixed(2);
        }   
        else if( billTotal.value <= 0)     {
        document.querySelector('.total-tip').innerHTML = "I can't serve my purpose unless there is a bill total, sorry";
        }   
        else if(total >= 0) {
        document.querySelector('.total-tip').innerHTML = "Your tip is: $" + total.toFixed(2); 
            }
});


typedPercentage.addEventListener("input", () => {
    tipPercentage.value = typedPercentage.value;    
    document.getElementById('symbol').innerHTML = tipPercentage.value + "%";
     total = billTotal.value * tipPercentage.value / 100;
     if( billTotal.value <= 0)     {
        document.querySelector('.total-tip').innerHTML = "I can't serve my purpose unless there is a bill total, sorry";
    } else if(total >= 0) {
        document.querySelector('.total-tip').innerHTML = "Your tip is: $" + total.toFixed(2); 
    }
});
numberOfPartyMembers += parseInt(numberOfPartyMembers.value);
total = total / numberOfPartyMembers.value;
console.log(total);