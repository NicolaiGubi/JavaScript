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
//Used when recalling a brick color in a saved game
function findColor(i,j){
    let storedColor = a[i][j];
    if (storedColor==="free"){
        storedColor = "aliceblue";
    }
    return storedColor;
}
//Changes the color and feedback.
function changePlayer(){
    if (color === "red"){
        color = "blue";
        feedback.innerHTML = ("BLUE players turn.");
    }else{
        color = "red";
        feedback.innerHTML = ("RED players turn.");
    }
}
//Show the buttons
function buttonShow(){
    for (let m = 0; m < 7; m++) {
        document.getElementById("col" + m).className = "visible";
    }
}
//Check if column is full
function buttonHide(m){
    if (a[m][0] !== "free"){

        document.getElementById("col" + m).className = "hidden";
    }
}
//Store the arrays
function save(){
    localStorage.setItem("gameStatus",true);
    localStorage.setItem("gameStatusColor",color);
    localStorage.setItem("gameStatusArray0", a[0].toString());
    localStorage.setItem("gameStatusArray1", a[1].toString());
    localStorage.setItem("gameStatusArray2", a[2].toString());
    localStorage.setItem("gameStatusArray3", a[3].toString());
    localStorage.setItem("gameStatusArray4", a[4].toString());
    localStorage.setItem("gameStatusArray5", a[5].toString());
    localStorage.setItem("gameStatusArray6", a[6].toString());
}
//Recall the array
function recall() {
    color = localStorage.getItem("gameStatusColor");
    a[0] = localStorage.getItem("gameStatusArray0").split(",");
    a[1] = localStorage.getItem("gameStatusArray1").split(",");
    a[2] = localStorage.getItem("gameStatusArray2").split(",");
    a[3] = localStorage.getItem("gameStatusArray3").split(",");
    a[4] = localStorage.getItem("gameStatusArray4").split(",");
    a[5] = localStorage.getItem("gameStatusArray5").split(",");
    a[6] = localStorage.getItem("gameStatusArray6").split(",");
}
//Place pieces
function place(n){
    for (let i = (a[n].length-1); i >= 0; i--){
        if (a[n][i] === "free"){
            circle(((n * 76) + 40), ((i * 76) + 40), 28, "black", color);
            a[n][i] = color;
            changePlayer();
            save();
            buttonHide(n);
            break;
        }
    }
}
//Create the game board
function createBoard(){
    if (localStorage.getItem("gameStatus")) {
        recall();
        //Set user turn feedback
        if (color === "red"){
            feedback.innerHTML = ("RED players turn.");
        }else{
            feedback.innerHTML = ("BLUE players turn.");
        }
        //Create board
        for (let i = 0; i < a.length; i++){
            for (let j = 0;j<a[i].length;j++){
                circle(((i * 76) + 40), ((j * 76) + 40), 28, "black", findColor(i,j));
            }
        }
    } else { //No saved game, create new
        for (let i = 0; i < sizeCol; i++) {
            a[i] = [];
            for (let j = 0; j < sizeRow; j++) {
                a[i][j] = "free";
            }
        }
        color = "red";
        feedback.innerHTML = ("RED starts the game.");
        for (let i = 0; i < a.length; i++){
            for (let j = 0;j<a[i].length;j++){
                circle(((i * 76) + 40), ((j * 76) + 40), 28, "black", "aliceblue");
            }
        }
    }
    buttonShow();
    save();
}
//Reset the game
function reset(){
    localStorage.removeItem("gameStatus");
    createBoard();
}
//Creates and draws the board
createBoard();