const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');
const restartBtn = document.getElementById('reset-btn');
const startBtn = document.getElementById('start-btn');

let started = false;
let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;
let countDownTimerId = null;


function startGame() {

    function randomSquare() {
        squares.forEach(square => {
            square.classList.remove('mole')
        })

        let randomSquare = squares[Math.floor(Math.random() * 9)];
        randomSquare.classList.add('mole');

        hitPosition = randomSquare.id;
    }

    squares.forEach(square => {
        square.addEventListener('mousedown', () => {
            if (square.id == hitPosition) {
                result++
                score.textContent = result;
                hitPosition = null;
            }
        })
    })

    function moveMole() {
        timerId = setInterval(randomSquare, 500)
    }

    moveMole()

    function countDown() {
        currentTime--;
        timeLeft.textContent = currentTime;
        if (currentTime == 0) {
            alert('Game Over! Your final score is ' + result)
            restart();
        }
    }

    countDownTimerId = setInterval(countDown, 1000)

    started = true;

}

startBtn.onclick = startGame;

function restart() {
    if (started == true) {
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        hitPosition = null;
        currentTime = 60;
        timeLeft.textContent = currentTime;
        result = 0;
        score.textContent = result;
        squares.forEach(square => {
            square.classList.remove('mole')
        })
    }
}

restartBtn.onclick = restart;