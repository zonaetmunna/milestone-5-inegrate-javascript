// handle deposite button event
document.getElementById("deposite-button").addEventListener('click', function () {
     //2. deposite
     // get the ammount deposited
     const depositeInput = document.getElementById("deposite-input");
     const newdepositeText = depositeInput.value;
     const newdepositeAmmount = parseFloat(newdepositeText);

     //3. add the deposite update 
     const depositeTotal = document.getElementById("deposite-total");
     const previousDepositeText = depositeTotal.innerText;
     const previousDepositeAmmount = parseFloat(previousDepositeText);

     const newDepositeTotal = previousDepositeAmmount + newdepositeAmmount;
     depositeTotal.innerText = newDepositeTotal;

     // balance
     // update account balance
     const balanceTotaol = document.getElementById("balance-total");

     previousBalanceTotalText = balanceTotaol.innerText;
     previousBalanceTotaolAmmount = parseFloat(previousBalanceTotalText);

     const newBalanceTotal = previousBalanceTotaolAmmount + newdepositeAmmount;
     balanceTotaol.innerText = newBalanceTotal;

     // clear deposite input field after add
     depositeInput.value = '';

});

// Withdraw part
//1. event handle in withdraw
document.getElementById("withdraw-button").addEventListener('click', function () {

     //2. get withdraw input
     const withdrawInput = document.getElementById("withdraw-input");
     const withdrawAmmountText = withdrawInput.value;
     const newwithdrawAmmount = parseFloat(withdrawAmmountText);

     //3. set withdraw total
     const withdrawTotal = document.getElementById("withdraw-total");
     const previouswithdrawText = withdrawTotal.innerText;
     const previouswithdrawTotal = parseFloat(previouswithdrawText);

     const newWithdrawTotal = newwithdrawAmmount + previouswithdrawTotal;
     withdrawTotal.innerText = newWithdrawTotal;


     // update balance
     const balanceTotal = document.getElementById("balance-total");
     const previousBalanceText = balanceTotal.innerText;
     const previousBalanceTotal = parseFloat(previousBalanceText);

     const newBalanceTotal = previousBalanceTotal - newwithdrawAmmount;
     balanceTotal.innerText = newBalanceTotal;

     // clear withdraw input
     withdrawInput.value = '';

})

