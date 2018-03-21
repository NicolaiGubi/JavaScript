let canvas = document.getElementById("myCanvas").getContext('2d');

function ranX(){
    return Math.floor(Math.random() * (889 - 11 + 1) ) + 11;
}

function ranY(){
    return Math.floor(Math.random() * (589 - 11 + 1) ) + 11;
}

function ranRadius(){
    return Math.floor(Math.random() * (40 - 10 + 1) ) + 10;
}

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

function circle(x,y,radius,strokeColor,fillColor){
    canvas.beginPath();
    canvas.arc(x,y,radius,0,Math.PI*2);
    canvas.lineWidth = 5;
    canvas.strokeStyle = strokeColor;
    canvas.stroke();
    canvas.fillStyle = fillColor;
    canvas.fill();
}

function draw (){
    let amount = document.getElementById("num1").value;
    for (let i = 0; i < amount; i++ ){
        circle(ranX(),ranY(),ranRadius(),randomColor(),randomColor());
    }
}

function reset(){
    canvas.clearRect(0, 0, 900, 600);
}
