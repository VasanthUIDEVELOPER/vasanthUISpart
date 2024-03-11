const timeleftdisplay = document.querySelector('#time-left')
const resultdisplay = document.querySelector('#result')
const startpausebutton = document.querySelector('#start-pause-button')
const square = document.querySelectorAll('.grid div')
const logsleft = document.querySelectorAll('.log-left')
const logsright = document.querySelectorAll('.log-right')
const carsleft = document.querySelectorAll('.car-left')
const carsright = document.querySelectorAll('.car-right')
const newgame = document.getElementById('newgame');
let currentindex = 76
let width = 9
let timerid
let outcometimerid
let currenttime = 20
function movefrog(e) {
    square[currentindex].classList.remove('frog')
    switch (e.key) {
        case 'ArrowLeft':
            if (currentindex % width !== 0)
                currentindex -= 1
            break
        case 'ArrowRight':
            if (currentindex % width < width - 1)
                currentindex += 1
            break
        case 'ArrowUp':
            if (currentindex - width >= 0)
                currentindex -= width
            break
        case 'ArrowDown':
            if (currentindex + width < width * width)
                currentindex += width
            break
    }
    square[currentindex].classList.add('frog')
}
function automoveelements() {
    currenttime--;
    timeleftdisplay.textContent = currenttime
    logsleft.forEach(logleft => movelogleft(logleft))
    logsright.forEach(logright => movelogright(logright))
    carsleft.forEach(carleft => movecarleft(carleft))
    carsright.forEach(carright => movecarright(carright))
}
function checkoutcomes() {
    lose()
    win()
}
function movelogleft(logleft) {
    switch (true) {
        case logleft.classList.contains('l1'):
            logleft.classList.remove('l1')
            logleft.classList.add('l2')
            break
        case logleft.classList.contains('l2'):
            logleft.classList.remove('l2')
            logleft.classList.add('l3')
            break
        case logleft.classList.contains('l3'):
            logleft.classList.remove('l3')
            logleft.classList.add('l4')
            break
        case logleft.classList.contains('l4'):
            logleft.classList.remove('l4')
            logleft.classList.add('l5')
            break
        case logleft.classList.contains('l5'):
            logleft.classList.remove('l5')
            logleft.classList.add('l1')
            break
    }
}
function movelogright(logright) {
    switch (true) {
        case logright.classList.contains('l1'):
            logright.classList.remove('l1')
            logright.classList.add('l5')
            break
        case logright.classList.contains('l2'):
            logright.classList.remove('l2')
            logright.classList.add('l1')
            break
        case logright.classList.contains('l3'):
            logright.classList.remove('l3')
            logright.classList.add('l2')
            break
        case logright.classList.contains('l4'):
            logright.classList.remove('l4')
            logright.classList.add('l3')
            break
        case logright.classList.contains('l5'):
            logright.classList.remove('l5')
            logright.classList.add('l4')
            break
    }
}
function movecarleft(carleft) {
    switch (true) {
        case carleft.classList.contains('c1'):
            carleft.classList.remove('c1')
            carleft.classList.add('c2')
            break
        case carleft.classList.contains('c2'):
            carleft.classList.remove('c2')
            carleft.classList.add('c3')
            break
        case carleft.classList.contains('c3'):
            carleft.classList.remove('c3')
            carleft.classList.add('c1')
            break
    }
}
function movecarright(carright) {
    switch (true) {
        case carright.classList.contains('c1'):
            carright.classList.remove('c1')
            carright.classList.add('c3')
            break
        case carright.classList.contains('c2'):
            carright.classList.remove('c2')
            carright.classList.add('c1')
            break
        case carright.classList.contains('c3'):
            carright.classList.remove('c3')
            carright.classList.add('c2')
            break
    }
}
function lose() {
    if (square[currentindex].classList.contains('c1') ||
        square[currentindex].classList.contains('l4') ||
        square[currentindex].classList.contains('l5') ||
        currenttime <= 0) {
        resultdisplay.textContent = 'You Lose'
        clearInterval(timerid)
        clearInterval(outcometimerid)
        square[currentindex].classList.remove('frog')
        document.removeEventListener('keyup', movefrog)
    }
}
function win() {
    if (square[currentindex].classList.contains('ending-block')) {
        resultdisplay.textContent = 'You Win'
        clearInterval(timerid)
        clearInterval(outcometimerid)
        document.removeEventListener('keyup', movefrog)
    }
}
startpausebutton.addEventListener('click',startPause )
function startPause(){
    if (timerid) {
        clearInterval(timerid)
        clearInterval(outcometimerid)
        outcometimerid = null
        timerid = null
        document.removeEventListener('keyup', movefrog)
    }
    else {
        timerid = setInterval(automoveelements, 1000)
        outcometimerid = setInterval(checkoutcomes, 50)
        document.addEventListener('keyup', movefrog)
    }
}
newgame.addEventListener('click', newgames);
function newgames(){
    console.log(currentindex)
    if(currenttime !=20 && currentindex !== 76){
        currenttime=20;
        this.currentindex=76;
        square[currentindex].classList.remove('frog');
        setTimeout(()=>{square[this.currentindex].classList.add('frog')}, 1000)
        // square[currentindex].classList.add('frog');
        // square[currentindex]=square[currentfrog];
    }
}
