/* 
// seceond item
document.getElementById("second-bubble-item").addEventListener('click', function () {
     console.log('seceond item clicked');
})

// ul clicked
document.getElementById("ul-clicked").addEventListener('click', function () {
     console.log("ul cliked")
})


// section clicked
document.getElementById("section-item").addEventListener('click', function () {
     console.log("section clicked");
}) */

const items = document.getElementsByClassName("item");
for (const item of items) {
     item.addEventListener('click', function (event) {
          // document.getElementById("section-item").removeChild(item);
          event.target.parentNode.removeChild(event.target);
     });
};