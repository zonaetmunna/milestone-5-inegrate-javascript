// get input value
function getInputValue(inputValueId) {
     const inputValue = document.getElementById(inputValueId);
     const itInputValueIdText = inputValue.value;
     const InputAmount = parseFloat(itInputValueIdText);

     // input field value remove
     inputValueId.value = '';

     return InputAmount;
}

// get previous value
function updateTotalValue(depositeTotalId, Amount) {
     const totalElement = document.getElementById(depositeTotalId);
     const totalAmountText = totalElement.innerText;
     const previousTotal = parseFloat(totalAmountText);
     totalElement.innerText = previousTotal + Amount;

}

function getCurrentBalance() {
     const balanceTotal = document.getElementById("balance-total");
     const balanceTotalText = balanceTotal.innerText;
     const balancePreviousAmount = parseFloat(balanceTotalText);
     return balancePreviousAmount;
}

function updateBalance(Amount, isAdd) {
     const balanceTotal = document.getElementById("balance-total");

     const balancePreviousAmount = getCurrentBalance();

     if (isAdd == true) {
          balanceTotal.innerText = balancePreviousAmount + Amount;
     }
     else {
          balanceTotal.innerText = balancePreviousAmount - Amount;
     }

}



// deposit button event handler
document.getElementById("deposite-button").addEventListener('click', function () {

     const depositInputAmount = getInputValue("deposite-input");
     if (depositInputAmount > 0) {
          updateTotalValue("deposite-total", depositInputAmount);
          updateBalance(depositInputAmount, true);
     }

});

// withdrow botton event handler
document.getElementById("withdraw-button").addEventListener('click', function () {

     const withdrawInputAmount = getInputValue("withdraw-input");
     const currentBalance = getCurrentBalance();
     if (withdrawInputAmount > 0 && withdrawInputAmount < currentBalance) {
          updateTotalValue("withdraw-total", withdrawInputAmount);
          updateBalance(withdrawInputAmount, false);
     }

});