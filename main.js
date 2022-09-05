const stopButton = document.getElementById('stop-button')
const startButton = document.getElementById('start-button')
const difficulty = document.getElementById('difficulty')
var score = document.getElementById('score')
var easy = document.getElementById('easy')
var medium = document.querySelector('#medium')
var hard = document.getElementById('hard')
const gameBoard = document.querySelector('.game-board')

startButton.addEventListener('click',()=>{
    stopButton.style.display='inline';
    var interval;
    if (easy.checked) {
        if (interval) {
            clearInterval(interval)
        }
        interval = setInterval(gameStart, 3000);
    }

    if (medium.checked) {
        if (interval) {
            clearInterval(interval)
        }
        interval = setInterval(gameStart, 2000);
    }

    if (hard.checked) {
        if (interval) {
            clearInterval(interval)
        }
        interval = setInterval(gameStart, 1000);
    }



    stopButton.addEventListener('click',()=>{
        clearInterval(easyInterval);
    })
})

function gameStart() {
    let top = Math.floor(Math.random()*500);

    let left = Math.floor(Math.random()*500);

    const bubbles = document.createElement('div');

    bubbles.setAttribute('id', 'bubble');

    gameBoard.appendChild(bubbles);

    bubbles.style.top=`${top}px`;

    bubbles.style.left=`${left}px`;

    bubbles.addEventListener('click',()=>{
        bubbles.style.display='none';
        score.innerText++;
    })
}





