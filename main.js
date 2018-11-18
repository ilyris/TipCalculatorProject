const billTotal = document.getElementById('bill-input');
const tipPercentage = document.getElementById('service-input');
const typedPercentage = document.getElementById('typed-percentage-input');
let numberOfPartyMembers = document.getElementById('party-number').value;
let total;

tipPercentage.addEventListener("input", () => {
    typedPercentage.value = tipPercentage.value;    
    document.getElementById('symbol').innerHTML = tipPercentage.value + "%";
    total = billTotal.value * tipPercentage.value / 100;
    total = total / document.getElementById('party-number').value;
        if(numberOfPartyMembers > 1 && total >= 0) {
            total = total / document.getElementById("party-number").value;
            document.querySelector('.total-tip').innerHTML = "Your tip per person is: $" + total.toFixed(2); 
        }   
        if( billTotal.value <= 0)     {
            document.querySelector('.total-tip').innerHTML = "I can't serve my purpose unless there is a bill total, sorry";
        }  else if(total >= 0 ) {
            document.querySelector('.total-tip').innerHTML = "Your tip is: $" + total.toFixed(2); 
        }
});


typedPercentage.addEventListener("input", () => {
    tipPercentage.value = typedPercentage.value;    
    document.getElementById('symbol').innerHTML = tipPercentage.value + "%";
     total = billTotal.value * tipPercentage.value / 100;
     total = total / document.getElementById('party-number').value;
     if(numberOfPartyMembers > 1) {
         total = total / document.getElementById("party-number").value;
         document.querySelector('.total-tip').innerHTML = "Your tip per person is: $" + total.toFixed(2);
     }   
     if( billTotal.value <= 0)     {
        document.querySelector('.total-tip').innerHTML = "I can't serve my purpose unless there is a bill total, sorry";
    } else if(total >= 0) {
        document.querySelector('.total-tip').innerHTML = "Your tip is: $" + total.toFixed(2); 
    }
});
console.log(total);