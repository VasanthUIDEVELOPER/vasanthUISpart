const square = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeleft = document.getElementById('time-left')
const score = document.querySelector('#score')
let result = 0
let hitposition
let currenttime = 120
let timerid = null
function randomsquare() {
    square.forEach(square => { square.classList.remove('mole') })
    let randomsquare = square[Math.floor(Math.random() * 9)]
    randomsquare.classList.add('mole')
    hitposition = randomsquare.id
}
square.forEach(square => {
    square.addEventListener('click', () => {
        if (square.id == hitposition) {
            result++
            score.textContent = result
            hitposition = null
        }
    })
})
function movemole() {
    timerid = setInterval(randomsquare, 2000)
}
movemole()
function countdown() {
    currenttime--
    timeleft.textContent = currenttime
    if (currenttime == 0) {
        clearInterval(countdowntimerid)
        clearInterval(timerid)
        alert('Game Over Your Score is' + result)
    }
}
let countdowntimerid = setInterval(countdown, 1000)