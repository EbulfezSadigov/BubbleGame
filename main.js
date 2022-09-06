const stopButton = document.getElementById("stop-button");
const startButton = document.getElementById("start-button");
const difficulty = document.getElementById("difficulty");
var score = document.getElementById("score");
var easy = document.getElementById("easy");
var medium = document.querySelector("#medium");
var hard = document.getElementById("hard");
var bubble = document.getElementById("bubble");
const gameBoard = document.querySelector(".game-board");
const name = document.getElementById("name");

var naming = prompt();

name.innerText = naming;

startButton.addEventListener("click", () => {
  stopButton.style.display = "inline";
  var interval;
  if (easy.checked) {
    if (interval) {
      clearInterval(interval);
    }
    interval = setInterval(easyStart, 500);
  } else if (medium.checked) {
    if (interval) {
      clearInterval(interval);
    }
    interval = setInterval(mediumStart, 2000);
  } else if (hard.checked) {
    if (interval) {
      clearInterval(interval);
    }
    interval = setInterval(hardStart, 1000);
  }

  stopButton.addEventListener("click", () => {
    clearInterval(interval);
    for (let i = 0; i < gameBoard.children.length; i++) {
      gameBoard.children[i].remove();
    }
  });
});

function easyStart() {
  let bottom = Math.floor(Math.random() * 650);

  let left = Math.floor(Math.random() * 650);

  const bubbles = document.createElement("span");

  bubbles.setAttribute("id", "bubble");

  gameBoard.appendChild(bubbles);

  bubbles.style.width = "50px";
  bubbles.style.height = "50px";

  bubbles.style.top = `${bottom}px`;

  bubbles.style.left = `${left}px`;

  bubbles.addEventListener("click", () => {
      bubbles.style.display = "none";
      score.innerText++;
      bubble.play();
  });
}

function mediumStart() {
  let top = Math.floor(Math.random() * 650);

  let left = Math.floor(Math.random() * 650);

  const bubbles = document.createElement("div");

  bubbles.setAttribute("id", "bubble");

  bubbles.style.width = "40px";
  bubbles.style.height = "40px";

  gameBoard.appendChild(bubbles);

  bubbles.style.top = `${top}px`;

  bubbles.style.left = `${left}px`;

  bubbles.addEventListener("click", () => {
    bubbles.style.display = "none";
    score.innerText = Number(score.innerText) + 2;
    bubble.play();
  });
}

function hardStart() {
  let top = Math.floor(Math.random() * 650);

  let left = Math.floor(Math.random() * 650);

  const bubbles = document.createElement("div");

  bubbles.setAttribute("id", "bubble");

  gameBoard.appendChild(bubbles);

  bubbles.style.width = "30px";

  bubbles.style.height = "30px";

  bubbles.style.top = `${top}px`;

  bubbles.style.left = `${left}px`;

  bubbles.addEventListener("click", () => {
    bubbles.style.display = "none";
    score.innerText = Number(score.innerText) + 3;
    bubble.play();
  });
}
