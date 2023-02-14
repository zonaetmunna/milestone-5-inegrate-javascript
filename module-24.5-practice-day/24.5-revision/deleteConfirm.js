/* document.getElementById("button-delete").addEventListener('click', function () {
     
}) */

/* document.getElementById("input-info").addEventListener('click', function () {
     const backgroundChange = document.body.style.backgroundColor = "red";
     // console.log(backgroundChange);
}); */

// focus
document.getElementById("input-info").addEventListener('focus', function () {
     const backgroundChangeFocus = document.body.style.backgroundColor = 'red';
     console.log(backgroundChangeFocus);
});

// blur
document.getElementById("input-info").addEventListener('blur', function () {
     document.body.style.backgroundColor = "blue";
})