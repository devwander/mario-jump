const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const score = document.querySelector('.score')
const gameBoard = document.querySelector('.game-board')
const gameOver = document.querySelector('.game-over')
const instruction = document.querySelector('.instruction')

let gameOverAudio = new Audio('audios/game_over.mp3')
gameOverAudio.volume = 0.2

let jumpAudio = new Audio('audios/jump_song.mp3')
jumpAudio.volume = 0.05
jumpAudio.playbackRate = 1.5

let initalScore = +score.innerHTML.replace('SCORE: ', '')
score.innerHTML = `SCORE: ${initalScore}`

const date = new Date();
initialTime = date.getTime();

const jump = () => {
    mario.classList.add('jump')
    jumpAudio.play()
    
    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500)
}

const loop = setInterval(() => {
    const pipePositon = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

    const date = new Date();

    if (pipePositon <= 120 && marioPosition < 103 && pipePositon > 0) {
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePositon}px`;

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`;
        mario.src = '../images/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        gameBoard.style.background = 'linear-gradient(#900, #BBB)'

        gameOver.innerHTML = 'GAME OVER'

        gameOverAudio.play();
        clearInterval(loop)
    }
    
    time = date.getTime()
    score.innerHTML = `SCORE: ${time - initialTime}`

}, 1)

document.addEventListener('keydown', jump)