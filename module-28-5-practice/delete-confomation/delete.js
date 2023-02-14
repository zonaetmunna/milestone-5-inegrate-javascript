document.getElementById("input-field").addEventListener('keyup', function (event) {


     if (event.target.value == "delete") {
          document.getElementById("delete-button").removeAttribute('disabled')
     }
     else {
          document.getElementById("delete-button").setAttribute('disabled', true);
     }



})