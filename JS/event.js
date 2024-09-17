// Option - 1 : Directly set on the HTML Element
// <button onclick="console.log(80)">Another Click</button>;

// Option - 2 : add onclick function
// IMPORTANT : We Will use this sometimes
//  <button onclick="document.body.style.backgroundColor='yellow'">
//    Make Yellow </button>;
function makeRed() {
  document.body.style.backgroundColor = "red";
}

// Option - 3 :
const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = makeBlue;
function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

// Another Option - 3 :
const makePurpleButton = document.getElementById("make-purple");
makePurpleButton.onclick = function makePurple() {
  document.body.style.backgroundColor = "purple";
};

// Option - 4 :
const pinkButton = document.getElementById("make-pink");
pinkButton.addEventListener("click", makePink);
function makePink() {
  document.body.style.backgroundColor = "pink";
}

// Option 4 : Another
const greenButton = document.getElementById("make-green");
greenButton.addEventListener("click", function makeGreen() {
  document.body.style.backgroundColor = "green";
});

// Option - 4 : Final
// IMPORTANT : We Will use this sometimes
const goldenRodButton = document
  .getElementById("make-goldenrod")
  .addEventListener("click", function goldenRod() {
    document.body.style.backgroundColor = "goldenrod";
  });
