
let operator = prompt("Please enter an operator you want to perform (+ ,- , * , / )");

let num1 = window.prompt("Enter a number");
let num2 = window.prompt("Enter another number");

num1 = parseFloat(num1);
num2 = parseFloat(num2);


let result = 0;
if (isNaN(num1) || isNaN(num2)){
    alert("You snooze! Refresh the page and try again")
}else {
if(operator == "+"){
    result = num1 + num2;
}else if (operator == "-" ){
    result = num1 - num2;
}else if (operator == "/" ){
    result = num1 / num2;
}else if (operator == "*" ){
    result = num1 * num2;
}

alert(num1+operator+ num2+ "=" + result);
}
