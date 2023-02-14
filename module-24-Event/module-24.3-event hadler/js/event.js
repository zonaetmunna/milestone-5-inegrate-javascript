
// difference ways to handle event

// type-1
const button1 = document.getElementById("button-clicked");
button1.onclick = makeBlue;
function makeBlue() {
     document.body.style.backgroundColor = "blue";
};
function makeRed() {
     document.body.style.backgroundColor = "red";
};

// type-2
// gray button 
const buttonGray = document.getElementById("make-gray-button");
buttonGray.onclick = function () {
     document.body.style.backgroundColor = "gray";
}

// type-3
// <!-- button LightGray --> 
const buttonLightGray = document.getElementById("button-gray");
buttonLightGray.addEventListener('click', makeLightGrayButton);
function makeLightGrayButton() {
     document.body.style.backgroundColor = "LightGray";
}

// type-4
// button SlateBlue
const buttonSlateBlue = document.getElementById("button-SlateBlue");
buttonSlateBlue.addEventListener('click', function () {
     document.body.style.backgroundColor = "SlateBlue";
});

// type-5
// button Orange
document.getElementById("button-Orange").addEventListener('click', function () {
     document.body.style.backgroundColor = "Orange";
})
