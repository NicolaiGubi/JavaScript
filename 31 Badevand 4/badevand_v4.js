let badevand = [-1, 1, 1, 1, 2, 0, 1 ,-0.1, 0.1, -20, -4, 10];
let oneDegree = [];
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let num1 = 0;
let num2 = 0;
let num3 = 0;

document.getElementById("div1").innerHTML = "The array is currently: " + badevand.join(", ");

document.getElementById("check").addEventListener("click", resultArray);

function addArray() {
    let input = document.getElementById("num").value;
    badevand.push(input);
    document.getElementById("div1").innerHTML = "The array is currently: " + badevand.join(", ");
}

//Number of days with minus degrees
function daysWithMinus(i){
    if (badevand[i] < 0) {
        count1++;
    }

}
//Number of days with the same temperature
function daysWithSameTemp(i){
    if (i < badevand.length) {
        num1 = badevand[i];
        num2 = badevand[i + 1];
        if (num1 < num2) {
            count2++;
        }
    }
}
//Number of days the temperature is 1 degree
function daysWith1Degree(i){
    if (badevand[i] == 1){
        count3++;
    }
}
//Number of day with 1 degree in a row
function daysWith1InARow(i){
    if (badevand[i] == 1 && badevand[i+1] == 1){
        num3++;
    } else {
        oneDegree.push(num3);
        num3 = 0;
    }
}

function resultArray(){
    count1 = 0;
    count2 = 0;
    count3 = 0;
    count4 = 0;
    num1 = 0;
    num2 = 0;
    num3 = 0;

    for (let i = 0; i < badevand.length; i++) {
        //Number of days with minus degrees
        daysWithMinus(i);
        //Number of days with the same temperature
        daysWithSameTemp(i);
        //Number of days the temperature is 1 degree
        daysWith1Degree(i);
        //Number of day with 1 degree in a row
        daysWith1InARow(i);
    }
    //Number of day with 1 degree in a row - result
    oneDegree.sort();
    oneDegree.reverse();
    count4 = oneDegree[0];

    //Feedback to DOM
    let feedback1 = ("There are " + count1 + " days with minus degrees.");
    document.getElementById("feedback1").innerHTML = feedback1;
    let feedback2 = ("There have been " + count2 + " days with raising temperatures.");
    document.getElementById("feedback2").innerHTML = feedback2;
    let feedback3 = ("There are " + count3 + " days with a temperature of 1 degree.");
    document.getElementById("feedback3").innerHTML = feedback3;
    let feedback4 = (count4 + " is the maximum amount of days in a row with the temperature of 1 degree.");
    document.getElementById("feedback4").innerHTML = feedback4;
}

window.onload = resultArray();