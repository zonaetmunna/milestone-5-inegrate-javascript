document.getElementById("delete-button").addEventListener('click', function () {
     const deleteButton = document.getElementById("delete-info").style.display = "none";
})

// focus
document.getElementById("delete-confirm").addEventListener('focus', function () {
     // const deleteButton = document.getElementById("delete-info").style.display = "none";
     document.body.style.backgroundColor = "red";
})

// blur
document.getElementById("delete-confirm").addEventListener('blur', function () {

     document.body.style.backgroundColor = "white";
})

/* // keydown
document.getElementById("delete-confirm").addEventListener('keydown', function () {
     const deleteConfirm = document.getElementById("delete-confirm");
     console.log(deleteConfirm.value);
}) */
// keypress
document.getElementById("delete-confirm").addEventListener('keypress', function () {
     const deleteConfirm = document.getElementById("delete-confirm");
     console.log(deleteConfirm.value);
})

// keyup
document.getElementById("delete-confirm").addEventListener('keyup', function (event) {
     if ((event.target.value) == 'delete') {
          document.getElementById("delete-button").removeAttribute('disabled');
     }
     else {
          document.getElementById("delete-button").setAttribute('disabled', true);
     };

})
/* // change
document.getElementById("delete-confirm").addEventListener('change', function () {
     const deleteConfirm = document.getElementById("delete-confirm");
     console.log(deleteConfirm.value);
}) */