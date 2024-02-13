function convert()
{
    var cmVal=Number(document.getElementById("input").value);
     var inchval=cmVal/2.54;
   var resultbox=Number(document.getElementById("resultbox").value);
document.getElementById("resultbox").value=(inchval.toFixed(2)+"inches");
}
var enter=document.getElementById("input");
enter.addEventListener("keypress",function(event){
    if(event.key=="Enter")
    {
        var cmVal=Number(document.getElementById("input").value);
var inchval=cmVal/2.54;
var resultbox=Number(document.getElementById("resultbox").value);
document.getElementById("resultbox").value=(inchval.toFixed(2)+"inches");        event.preventDefault();
        document.getElementById("result").click();
    }
})
function cmtomm()
{
    var cmVal=Number(document.getElementById("input").value);
     var inchval=cmVal*10;
   var resultbox=Number(document.getElementById("resultbox").value);
document.getElementById("resultbox").value=(inchval.toFixed(2)+"mm");
}
var enter=document.getElementById("input");
enter.addEventListener("keypress",function(event){
    if(event.key=="Enter")
    {
        var cmVal=Number(document.getElementById("input").value);
var inchval=cmVal*10;
var resultbox=Number(document.getElementById("resultbox").value);
document.getElementById("resultbox").value=(inchval.toFixed(2)+"mm");        event.preventDefault();
        document.getElementById("result").click();
    }
})
function cmtom()
{
    var cmVal=Number(document.getElementById("input").value);
     var inchval=cmVal/100;
   var resultbox=Number(document.getElementById("resultbox").value);
document.getElementById("resultbox").value=(inchval.toFixed(2)+"m");
}
var enter=document.getElementById("input");
enter.addEventListener("keypress",function(event){
    if(event.key=="Enter")
    {
        var cmVal=Number(document.getElementById("input").value);
var inchval=cmVal/100;
var resultbox=Number(document.getElementById("resultbox").value);
document.getElementById("resultbox").value=(inchval.toFixed(2)+"m");        event.preventDefault();
        document.getElementById("result").click();
    }
})
function cmtokm()
{
    var cmVal=Number(document.getElementById("input").value);
     var inchval=cmVal/100000;
   var resultbox=Number(document.getElementById("resultbox").value);
document.getElementById("resultbox").value=(inchval.toFixed(2)+"km");
}
var enter=document.getElementById("input");
enter.addEventListener("keypress",function(event){
    if(event.key=="Enter")
    {
        var cmVal=Number(document.getElementById("input").value);
var inchval=cmVal/100000;
var resultbox=Number(document.getElementById("resultbox").value);
document.getElementById("resultbox").value=(inchval.toFixed(2)+"km");        event.preventDefault();
        document.getElementById("result").click();
    }
})

