


/*
function test(){
    let color = "red";
    return color;
}

console.log(test());
*/

/*
let amount = 9;
function pyramid (n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < n - i; j++) {
            document.getElementById("output").innerHTML += "...";
        }
        for (let k = 0; k < 2 * i - 1; k++) {
            document.getElementById("output").innerHTML += "A";
        }

        document.getElementById("output").innerHTML += "<br>";
    }
}
pyramid(amount);
*/

/*
function random(){
    let num = Math.floor(Math.random()*11);
    console.log(num);
}
*/
/*
function randomColor(){
    let num = Math.floor(Math.random()*11);
    let color = "black";
    switch (num){
        case 0:
            color = "White";
            break;
        case 1:
            color = "Red";
            break;
        case 2:
            color = "Green";
            break;
        case 3:
            color = "Blue";
            break;
        case 4:
            color = "Cyan";
            break;
        case 5:
            color = "Magenta";
            break;
        case 6:
            color = "Yellow";
            break;
        case 7:
            color = "Orange";
            break;
        case 8:
            color = "Purple";
            break;
        case 9:
            color = "Indigo";
            break;
        case 10:
            color = "Gray";
            break;
        default:
            color = "Black";
            break;
    }
    return color;
}

console.log(randomColor());
console.log(randomColor());
console.log(randomColor());
console.log(randomColor());
console.log(randomColor());
*/

/*
let canvas = document.getElementById("myCanvas").getContext('2d');


function triangle (a,b,c){
    canvas.beginPath();
    canvas.lineWidth="1";
    canvas.strokeStyle = c;
    canvas.moveTo(a,b);
    canvas.lineTo(a+30,b);
    canvas.stroke();
    canvas.lineTo(a+15,b-20);
    canvas.stroke();
    canvas.lineTo(a,b);
    canvas.stroke();
    canvas.fillStyle = c;
    canvas.fill();
}

function circle(a,b,c){
    canvas.beginPath();
    canvas.arc(a,b,10,0,Math.PI*2);
    canvas.fillStyle = c;
    canvas.fill();
}

function horLine(a,b,c,d){
    canvas.beginPath();
    canvas.lineWidth="5";
    canvas.strokeStyle = d;
    canvas.moveTo(a,b);
    canvas.lineTo(a+c,b);
    canvas.stroke();
}

let image = document.getElementById("cow");
canvas.drawImage(image,10,10,160,160);

triangle(20,100,"orange");
triangle(150,40,"black");
triangle(160,160,"cyan");
circle(100,30,"green");
circle(40,10,"red");
horLine(10,75,240,"blue");
horLine(50,200,20,"gray");
 */