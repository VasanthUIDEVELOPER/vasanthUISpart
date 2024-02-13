document.addEventListener("DOMContentLoaded",function(){
    let display=document.getElementById("display");
    let currentvalue="0";
    document.addEventListener("keydown",function(event)
    {
        const key=event.key;
        if(isDigit(key)){
            handleDigit(key);
        }
            else if(isOperator(key)){
                handleOperator(key);
            }
            else if(key==="Enter" || key==="="){
                calculateResult();
            }
            else if(key==="Escape"){
                clearDisplay();
            }
            else if(key==="Backspace"){
                backspace();
            }        
    });
    function isDigit(key){
        return /^\d$/.test(key);
    }
    function isOperator(key){
        return /^[\+\-\*\/]$/.test(key);
    }
    function handleDigit(digit){
        if(currentvalue==="0"){
            currentvalue=digit;
        }
        else{
            currentvalue +=digit;
        }
        updateDisplay();
    }
    function handleOperator(operator)
    {
        if(currentvalue !=="0" && !isOperator(currentvalue.charAt(currentvalue.length-1))){
            currentvalue +=operator;
            updateDisplay();
        }
    }
    function calculateResult(){
        try{
            currentvalue=eval(currentvalue).toString();
            updateDisplay();
        }
        catch (error){
            display.textContent="Error";
            currentvalue="0";
        }
    }
    function clearDisplay(){
        currentvalue="0";
        updateDisplay();
    }
    function backspace(){
        if(currentvalue.length>1){
            currentvalue=currentvalue.slice(0,-1);
        }
        else{
            currentvalue="0";
        }
        updateDisplay();
    }
    function updateDisplay(){
        display.textContent=currentvalue;
    }
});