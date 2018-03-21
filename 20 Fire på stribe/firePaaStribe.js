let canvas = document.getElementById("canvas").getContext('2d'); //Get the canvas
let a=[];           //Array variable
let sizeCol = 7;    //Number of columns
let sizeRow = 6;    //Number of rows
let color = "red";  //Start color
let feedback = document.getElementById("feedback"); //Get the feedback text

//My general circle function
function circle(x,y,radius,strokeColor,fillColor){
    canvas.beginPath();
    canvas.arc(x,y,radius,0,Math.PI*2);
    canvas.lineWidth = 1;
    canvas.strokeStyle = strokeColor;
    canvas.stroke();
    canvas.fillStyle = fillColor;
    canvas.fill();
}
//Draw the board function called once by createBoard function
function drawBoard() {
    canvas.fillStyle="Gold";
    canvas.fillRect(0,0,540,480);
    for (let i = 0; i < a.length; i++){
        for (let j = 0;j<a[i].length;j++){
            circle(((i * 76) + 40), ((j * 76) + 40), 28, "black", "white");
        }
    }
}
//Create the Array and call the draw function
function createBoard(){
    for (let i = 0; i < sizeCol; i++) {
        a[i]=[];
        for (let j = 0; j < sizeRow; j++) {
            a[i][j] = "free";
        }
    }
    drawBoard();
}
//Changes the color and feedback.
function changePlayer(){
    if (color === "red"){
        color = "blue";
        feedback.innerHTML = ("Click a button to place a BLUE brick.");
    }else{
        color = "red";
        feedback.innerHTML = ("Click a button to place a RED brick.");
    }
}

//Handle the seven button clicks - this could probably be made smarter
function col1(){
    for (let i = (a[0].length-1); i >= 0; i--){
        if (a[0][i] === "free"){
            circle(40, ((i * 76) + 40), 28, "black", color);
            a[0][i] = color;
            changePlayer();
            break;
        }
    }
}
function col2(){
    for (let i = (a[1].length-1); i >= 0; i--){
        if (a[1][i] === "free"){
            circle(((76) + 40), ((i * 76) + 40), 28, "black", color);
            a[1][i] = color;
            changePlayer();
            break;
        }
    }
}
function col3(){
    for (let i = (a[2].length-1); i >= 0; i--){
        if (a[2][i] === "free"){
            circle(((2 * 76) + 40), ((i * 76) + 40), 28, "black", color);
            a[2][i] = color;
            changePlayer();
            break;
        }
    }
}
function col4(){
    for (let i = (a[3].length-1); i >= 0; i--){
        if (a[3][i] === "free"){
            circle(((3 * 76) + 40), ((i * 76) + 40), 28, "black", color);
            a[3][i] = color;
            changePlayer();
            break;
        }
    }
}
function col5(){
    for (let i = (a[4].length-1); i >= 0; i--){
        if (a[4][i] === "free"){
            circle(((4 * 76) + 40), ((i * 76) + 40), 28, "black", color);
            a[4][i] = color;
            changePlayer();
            break;
        }
    }
}
function col6(){
    for (let i = (a[5].length-1); i >= 0; i--){
        if (a[5][i] === "free"){
            circle(((5 * 76) + 40), ((i * 76) + 40), 28, "black", color);
            a[5][i] = color;
            changePlayer();
            break;
        }
    }
}
function col7(){
    for (let i = (a[6].length-1); i >= 0; i--){
        if (a[6][i] === "free"){
            circle(((6 * 76) + 40), ((i * 76) + 40), 28, "black", color);
            a[6][i] = color;
            changePlayer();
            break;
        }
    }
}
//Creates and draws the board
createBoard();