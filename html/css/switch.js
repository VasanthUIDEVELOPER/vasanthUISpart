
function operation()
{
    let num1=Number(document.getElementById("value1").value);
    let num2=Number(document.getElementById("value2").value);
    var operator=document.getElementById("operator1").value;
    console.log(operator)
    switch(operator)
    {
        case '+':
        result=num1+num2;
        break;
        case '-':
        result=num1-num2;
        break;
        case '*':
        result=num1*num2;
        break;
        case '/':
        result=num1/num2;
        break;
        // default:
        //     result="Invalid operator";
        //     break;
    }
    console.log(result)
    document.getElementById("result").innerText="Result:"+result;
}