// Option - 1 : Directly set on the HTML Element
    // <button onclick="console.log(80)">Another Click</button>;

// Option - 2 : add onclick function
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
