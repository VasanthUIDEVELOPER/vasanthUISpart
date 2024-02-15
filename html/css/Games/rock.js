const computerchoicedisplay=document.getElementById('computer-choice')
const userchoicedisplay=document.getElementById('user-choice')
const resultdisplay=document.getElementById('result')
const possiblechoices=document.querySelectorAll('button')
let computerchoice
let userchoice
possiblechoices.forEach(possiblechoice =>possiblechoice.addEventListener('click',(e)=>{
    userchoice=e.target.id
    userchoicedisplay.innerHTML = userchoice
    generateComputerChoice()
    getResult()
}))
function generateComputerChoice(){
    const randomnumber=Math.floor(Math.random()*possiblechoices.length+1)
if(randomnumber===1)
{
    computerchoice="rock"
}
if(randomnumber===2)
{
    computerchoice="paper"
}
if(randomnumber===3)
{
    computerchoice="scissor"
}
computerchoicedisplay.innerHTML=computerchoice
}
function getResult(){
    if(computerchoice===userchoice){
        result="Its Draw"
    }
    if(computerchoice==='rock' && userchoice==='paper'){
        result="You win"
    }
    if(computerchoice==='rock' && userchoice==='scissor'){
        result="You Lost"
    }
    if(computerchoice==='paper' && userchoice==='scissor'){
        result="You win"
    }
    if(computerchoice==='paper' && userchoice==='rock'){
        result="You Lost"
    }
    if(computerchoice==='scissor' && userchoice==='rock'){
        result="You win"
    }
    if(computerchoice==='scissor' && userchoice==='paper'){
        result="You Lost"
    }
    resultdisplay.innerHTML=result   
}
