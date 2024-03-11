const display = document.getElementById("display");
let string = ""
function appendToDisplay(input) {
    // console.log(input)
    // console.log("hghg", display)
    display.value += input;
}
function cleardisplay() {
    display.value = ""
}
function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = "Error";
    }
}
function buttondelete() {
    // console.log('hi')
    let stringui = display.value
    // console.log(stringui)
    string = stringui.substring(0, stringui.length - 1);
    // console.log(string)
    display.value = string;
}
// appendToDisplay()
// function array() {
//     let arr2d = [
//         ["a", "b", "c"],
//         ["c", "d", "f"],
//         ["d", "f", "g"]]
//     let count = arr2d.flat().reduce((accumulator, currval) => {
//         if (accumulator[currval])
//             accumulator[currval]++
//         else
//             accumulator[currval] = 1
//         return accumulator
//     }
//         , {})
//     console.log(count)
// }
// array()
