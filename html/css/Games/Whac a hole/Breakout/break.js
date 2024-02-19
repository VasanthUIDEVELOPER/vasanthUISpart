const grid = document.querySelector('.grid')
const scoredisplay = document.querySelector('#score')
const blockwidth = 100
const blockheight = 20
const boardwidth = 560
const boardheight = 300
const balldiameter = 20
let timerid
let xdirection = -2
let ydirection = 2
let score = 0
const userstart = [230, 10]
let currentposition = userstart
const ballstart = [270, 40]
let ballcurrentposition = ballstart
class Block 
{
    constructor(xAxis, yAxis) 
    {
        this.bottomLeft = [xAxis, yAxis]
        this.bottomRight = [xAxis + blockwidth, yAxis]
        this.topLeft = [xAxis, yAxis + blockheight]
        this.topRight = [xAxis + blockwidth, yAxis + blockheight]
    }
}
const blocks =
 [new Block(10, 270), new Block(120, 270), new Block(230, 270), new Block(340, 270), new Block(450, 270),
  new Block(10, 240), new Block(120, 240), new Block(230, 240), new Block(340, 240), new Block(450, 240),
  new Block(10, 210), new Block(120, 210), new Block(230, 210), new Block(340, 210), new Block(450, 210)]
//console.log(block[0])
function addBlock() 
{
    for (let i = 0; i < blocks.length; i++) 
    {
        const block = document.createElement('div')
        block.classList.add('block')
        block.style.left = blocks[i].bottomLeft[0] + 'px'
        block.style.bottom = blocks[i].bottomLeft[1] + 'px'
        grid.appendChild(block)
        console.log(blocks[i].bottomLeft)
    }
}
addBlock()
const user = document.createElement('div')
user.classList.add('user')
grid.appendChild(user)
drawuser()
const ball = document.createElement('div')
ball.classList.add('ball')
grid.appendChild(ball)
drawball()
function drawuser() 
{
    user.style.left = currentposition[0] + 'px'
    user.style.bottom = currentposition[1] + 'px'
}
function drawball() 
{
    ball.style.left = ballcurrentposition[0] + 'px'
    ball.style.bottom = ballcurrentposition[1] + 'px'
}

function moveuser(e) 
{
    switch (e.key) 
    {
        case 'ArrowLeft':
            if (currentposition[0] > 0)
            {
                currentposition[0] -= 10
                drawuser()
            }
            break;
        case 'ArrowRight':
            if (currentposition[0] < boardwidth - blockwidth) 
            {
                currentposition[0] += 10
                drawuser()
            }
            break;
    }
}
document.addEventListener('keydown', moveuser)
function moveball() 
{
    ballcurrentposition[0] += xdirection
    ballcurrentposition[1] += ydirection
    drawball()
    checkforcollision()
}
timerid = setInterval(moveball, 20)
function checkforcollision() 
{
    for (let i = 0; i < blocks.length; i++) 
    {
        if (ballcurrentposition[0] > blocks[i].bottomLeft[0] && 
            ballcurrentposition[0] < blocks[i].bottomRight[0] &&
            ((ballcurrentposition[1] + balldiameter) > blocks[i].bottomLeft[1] && 
            ballcurrentposition[1] < blocks[i].topLeft[1])) 
        {
            const allblocks = Array.from(document.querySelectorAll('.block'))
            allblocks[i].classList.remove('block')
            blocks.splice(i, 1)
            changedirection()
            score++
            scoredisplay.innerHTML = score
            if (blocks.length == 0) 
            {
                scoredisplay.innerHTML = 'You Win'
                clearInterval(timerid)
                document.removeEventListener('keydown', moveuser)
            }
        }
    }
    if (ballcurrentposition[0] >= (boardwidth - balldiameter) ||
        (ballcurrentposition[1] >= (boardheight - balldiameter)) ||
        (ballcurrentposition[0] <= 0)) {
        changedirection()
    }
    if ((ballcurrentposition[0] > currentposition[0] && 
         ballcurrentposition[0] < currentposition[0] + blockwidth &&
        (ballcurrentposition[1] > currentposition[1] && 
         ballcurrentposition[1] < currentposition[1] + blockheight))) 
         {
        changedirection()
    }
    if (ballcurrentposition[1] <= 0) 
    {
        clearInterval(timerid)
        scoredisplay.innerHTML = 'You Lose'
        document.removeEventListener('keydown', moveuser)
    }
}
function changedirection() 
{
    if (xdirection === 2 && ydirection === 2) 
    {
        ydirection = -2
        return
    }
    if (xdirection === 2 && ydirection === -2) 
    {
        xdirection = -2
        return
    }
    if (xdirection === -2 && ydirection === -2) 
    {
        ydirection = 2
        return
    }
    if (xdirection === -2 && ydirection === 2) 
    {
        xdirection = 2
        return
    }
}