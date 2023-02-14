function getInputButton(inputId) {
     const inputValue = document.getElementById(inputId);
     const inputText = inputValue.value;
     const inputAmount = parseFloat(inputText);

     inputValue.value = '';
     return inputAmount;
}

function updateValue(totalValueId, amount) {
     const totalValue = document.getElementById(totalValueId);
     const totalText = totalValue.innerText;
     const totalTextNum = parseFloat(totalText);
     const totalAmount = totalTextNum + amount;
     totalValue.innerText = totalAmount;
}

function updateBalance(amount, issAdd) {
     const blanceValue = document.getElementById("balance-total");
     const blanceText = blanceValue.innerText;
     const blanceAmount = parseFloat(blanceText);
     let newBalance
     if (issAdd == true) {
          newBalance = blanceAmount + amount;
     }
     else {
          newBalance = blanceAmount - amount;
     }


     blanceValue.innerText = newBalance;
}

// 
document.getElementById("deposite-button").addEventListener('click', function () {
     const depositeValue = getInputButton("deposite-input");
     if (depositeValue > 0) {
          updateValue("deposite-total", depositeValue);
          updateBalance(depositeValue, true);
     }


});

document.getElementById("withdraw-button").addEventListener('click', function () {
     const withdrawValue = getInputButton("withdraw-input");
     if (withdrawValue > 0 &&
          updateValue("withdraw-total", withdrawValue);
     updateBalance(withdrawValue, false);
})