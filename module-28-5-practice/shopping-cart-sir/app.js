
function updateProductNumber(product, price, isincrease) {
     const productInput = document.getElementById(product + "-number");
     let productNumber = productInput.value;
     if (isincrease == true) {
          productNumber = parseInt(productNumber) + 1;
     }
     else if (productNumber > 0) {
          productNumber = parseInt(productNumber) - 1;
     }
     productInput.value = productNumber;

     // 
     const productTotal = document.getElementById(product + "-total");
     productTotal.innerText = productNumber * price;

     // 
     calculateTotal();
}
function getInputValue(product) {
     const productInput = document.getElementById(product + "-number");
     const productNumber = parseInt(productInput.value);
     return productNumber;
}

function calculateTotal() {
     const phoneTotal = getInputValue('phone') * 1219;
     const caseTotal = getInputValue('case') * 59;

     const subTotal = phoneTotal + caseTotal;
     const tax = subTotal / 10;
     const total = subTotal + tax;

     document.getElementById("sub-total").innerText = subTotal;
     document.getElementById("tax").innerText = tax;
     document.getElementById("total").innerText = total;

}

// add event handler phone increasing and decreasing
document.getElementById("phone-plus").addEventListener('click', function () {

     updateProductNumber('phone', 1219, true);
});

document.getElementById("phone-minus").addEventListener('click', function () {
     updateProductNumber('phone', 1219, false);
});

// 
document.getElementById("case-plus").addEventListener('click', function () {
     updateProductNumber('case', 59, true);
});

document.getElementById("case-minus").addEventListener('click', function () {
     updateProductNumber('case', 59, false);
});