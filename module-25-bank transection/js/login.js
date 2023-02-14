// submit button add event listener
document.getElementById("login-submit").addEventListener('click', function () {
     // get user email
     const emailfield = document.getElementById("user-email");
     const userEmail = emailfield.value;

     // get user pass
     const passField = document.getElementById("user-passoward");
     const userPassoward = passField.value;

     // check user email and pass
     if (userEmail == 'sontan@bap.com' && userPassoward == 'sontan') {
          window.location.href = "banking.html";
     }
});




