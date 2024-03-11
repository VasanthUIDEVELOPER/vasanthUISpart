const grid = document.querySelector('.grid')
const resultdisplay = document.querySelector('.results')
let currentshooterindex = 202
let width = 15
let direction = 1
let invadersid
let goingright = true
let aliensremoved = []
let results = 0
for (let i = 0; i < width * width; i++) {
    const square = document.createElement('div')
    grid.appendChild(square)
}
const squares = Array.from(document.querySelectorAll('.grid div'))
const alieninvaders = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    30, 31, 32, 33, 34, 35, 36, 37, 38, 39
]
function draw() {
    for (let i = 0; i < alieninvaders.length; i++) {
        if (!aliensremoved.includes(i)) {
            squares[alieninvaders[i]].classList.add('invader')
        }
    }
}
draw()
squares[currentshooterindex].classList.add('shooter')
function remove() {
    for (let i = 0; i < alieninvaders.length; i++) {
        squares[alieninvaders[i]].classList.remove('invader')
    }
}
function moveshooter(e) {
    squares[currentshooterindex].classList.remove('shooter')
    switch (e.key) {
        case 'ArrowLeft':
            if (currentshooterindex % width !== 0)
                currentshooterindex -= 1
            break;
        case 'ArrowRight':
            if (currentshooterindex % width < width - 1)
                currentshooterindex += 1
            break;
    }
    squares[currentshooterindex].classList.add('shooter')
}
document.addEventListener('keydown', moveshooter)
function moveinvaders() {
    const leftedge = alieninvaders[0] % width === 0
    const rightedge = alieninvaders[alieninvaders.length - 1] % width === width - 1
    remove()
    if (rightedge && goingright) {
        for (let i = 0; i < alieninvaders.length; i++) {
            alieninvaders[i] += width + 1
            direction = -1
            goingright = false
        }
    }
    if (leftedge && !goingright) {
        for (let i = 0; i < alieninvaders.length; i++) {
            alieninvaders[i] += width - 1
            direction = 1
            goingright = true
        }
    }
    for (let i = 0; i < alieninvaders.length; i++) {
        alieninvaders[i] += direction
    }
    draw()
    if (squares[currentshooterindex].classList.contains('invader')) {
        resultdisplay.innerHTML = 'Game Over'
        clearInterval(invadersid)
    }
    if (aliensremoved.length === alieninvaders.length) {
        resultdisplay.innerHTML = 'You Win'
        clearInterval(invadersid)
    }
}
invadersid = setInterval(moveinvaders, 1000)
function shoot(e) {
    let laserid
    let currentlaserindex = currentshooterindex
    function movelaser() {
        squares[currentlaserindex].classList.remove('laser')
        currentlaserindex -= width
        squares[currentlaserindex].classList.add('laser')
        if (squares[currentlaserindex].classList.contains('invader')) {
            squares[currentlaserindex].classList.remove('laser')
            squares[currentlaserindex].classList.remove('invader')
            squares[currentlaserindex].classList.add('boom')
            setTimeout(() => squares[currentlaserindex].classList.remove('boom'), 300)
            clearInterval(laserid)
            const alienremoved = alieninvaders.indexOf(currentlaserindex)
            aliensremoved.push(alienremoved)
            results++
            resultdisplay.innerHTML = results
        }
    }
    switch (e.key) {
        case 'ArrowUp':
            laserid = setInterval(movelaser, 100)

    }
}
document.addEventListener('keydown', shoot)