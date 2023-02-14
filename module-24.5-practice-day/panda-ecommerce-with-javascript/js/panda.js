


// backPack heading background change
const backPackTile = document.getElementById("backpack-color").style.backgroundColor = "DarkGoldenRod";
console.log(backPackTile);

// shoes part card border reduis change

/* const shoesBorderRedius = document.getElementsByClassName("borderChange").style. */

const shoes = document.getElementById("shoes").style.borderRadius = "5px";

// subscibe part

document.getElementById("specific-string").addEventListener('keyup', function (event) {
     if ((event.target.value) == 'gmail') {
          document.getElementById("submit-button").removeAttribute("disabled")

     }
     else {
          document.getElementById("submit-button").setAttribute("disabled", true);
     }


});