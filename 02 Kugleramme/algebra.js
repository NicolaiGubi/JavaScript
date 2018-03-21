/*
let a = Number(prompt("First number?"));
let b = Number(prompt("Second number?"));

let res = a + b;

alert("The result is: " + res);
*/

function addResult() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = Number(num1) + Number(num2);
    let feedback = document.getElementById("result");
    feedback.innerHTML = ("Your result is: " + result);
}

function subResult() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = Number(num1) - Number(num2);
    let feedback = document.getElementById("result");
    feedback.innerHTML = ("Your result is: " + result);
}

function mulResult() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = Number(num1) * Number(num2);
    let feedback = document.getElementById("result");
    feedback.innerHTML = ("Your result is: " + result);
}

function divResult() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = Number(num1) / Number(num2);
    let feedback = document.getElementById("result");
    feedback.innerHTML = ("Your result is: " + result);
}

