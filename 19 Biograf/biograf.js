let canvas = document.getElementById("canvas").getContext('2d');
let a=[];
$("#feedback01.feedback").hide();
let canvasCenterX = 0;
let startX = 0;

function reset(){
    canvas.clearRect(0, 0, 900, 600);
}

function circle(x,y,radius,strokeColor,fillColor){
    canvas.beginPath();
    canvas.arc(x,y,radius,0,Math.PI*2);
    canvas.lineWidth = 1;
    canvas.strokeStyle = strokeColor;
    canvas.stroke();
    canvas.fillStyle = fillColor;
    canvas.fill();
}

function drawScreen(){
    canvasCenterX = document.getElementById("canvas").width/2
    startX = canvasCenterX-((a.length/2)*20);

    canvas.beginPath();
    canvas.lineWidth = 6;
    canvas.strokeStyle = "black";
    canvas.moveTo(canvasCenterX-220,7);
    canvas.lineTo(canvasCenterX+200,7);
    canvas.stroke();

    canvas.font = "12px Arial";
    canvas.fillStyle = "Black";
    canvas.fillText("Screen",canvasCenterX-30,20);
}

function drawCinema() {
    reset();
    drawScreen();
    for (let i = 0; i < a.length; i++){
        for (let j = 0;j<a[i].length;j++){
            if (a[i][j]) {
                circle((startX + (i*20)), ((20 * j) + 50), 8, "black", "white");
            } else{
                circle((startX + (i*20)), ((20 * j) + 50), 8, "black", "red");
            }
        }
    }
}

function createCinema() {
    reset();

    let sizeX = document.getElementById("sizeX").value;
    let sizeY = document.getElementById("sizeY").value;

    for (let i = 0; i < sizeX; i++) {
        a[i]=[];
        for (let j = 0; j < sizeY; j++) {
            a[i][j] = true;
        }
    }
    drawCinema();
}

function bookSeat(){
    let seatRow = (Number(document.getElementById("seatRow").value)-1);
    let seatNumber = (Number(document.getElementById("seatNumber").value)-1);
    
    if (a[seatNumber][seatRow]){
        circle((startX + (seatNumber*20)),((20*seatRow)+50),8,"black","red");
        a[seatNumber][seatRow] = false;
    } else {
        $("#feedback01.feedback").slideDown(500);
        setTimeout(function() {
            $("#feedback01.feedback").slideUp(200);
        }, 3000);
    }
}
