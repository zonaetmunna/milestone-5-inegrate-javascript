
// practice 1
// player tilte and blogs title  color change
const playerTitle = document.getElementById("player-title");
playerTitle.style.color = "rgba(255, 99, 71, 1)";

const blogsTitle = document.getElementById("blogs-title");
blogsTitle.style.color = 'rgba(58, 199, 15, 1)';

// practice 2
// player class background change
const players = document.getElementsByClassName("player");
for (const player of players) {
     player.style.backgroundColor = 'rgba(47, 161, 12, 1)';
}

// practice 3 

document.getElementById("button-add").addEventListener('click', function () {
     const li = document.createElement('li');
     li.innerText = "JavaScript DOM book";

     const ul = document.getElementById("add-content");
     ul.appendChild(li);
})

// pratice 4
document.getElementById("button-incrase").addEventListener('click', function () {
     const inputField = document.getElementById("input-field");
     inputFieldNumber = inputField.value;
     let inputNumber = 0;
     if (inputFieldNumber < 5) {
          inputFieldNumber++
          inputNumber = inputNumber + inputFieldNumber;
          inputField.value = inputFieldNumber;
          // document.getElementById("button-incrase").removeAttribute("disabled")
     }
     else {
          document.getElementById("button-incrase").setAttribute("disabled", true);
     }
})

