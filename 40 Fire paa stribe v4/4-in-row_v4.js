let canvas = document.getElementById("canvas").getContext('2d'); //Get the canvas
let a=[];               //Array variable
let sizeCol = 7;        //Number of columns
let sizeRow = 6;        //Number of rows
let curPlay = "1";      //Start player
let color = "white";    //Defines the current player color
let feedback = document.getElementById("feedback"); //Get the feedback text
//Creates player object
function Player(name, color){
    this.name = name;
    this.color = color;
}
let player01 = new Player ("Player 1", "White");    //Creates player 1
let player02 = new Player ("Player 2", "White");    //Creates player 2

//Shows the Setup table and listens to the event handlers
function setup() {
    $("#game").slideUp(100);
    curPlay = "1";
    document.getElementById("p1ColRed").addEventListener("click", function () {
        player01.color = "firebrick";
        document.getElementById("p2ColRed").classList.add("hidden");
        document.getElementById("p2ColBlue").classList.remove("hidden");
        document.getElementById("p2ColGreen").classList.remove("hidden");
        document.getElementById("p2ColMagenta").classList.remove("hidden");
        document.getElementById("p2ColBlack").classList.remove("hidden");
    });
    document.getElementById("p1ColBlue").addEventListener("click", function () {
        player01.color = "royalblue";
        document.getElementById("p2ColRed").classList.remove("hidden");
        document.getElementById("p2ColBlue").classList.add("hidden");
        document.getElementById("p2ColGreen").classList.remove("hidden");
        document.getElementById("p2ColMagenta").classList.remove("hidden");
        document.getElementById("p2ColBlack").classList.remove("hidden");
    });
    document.getElementById("p1ColGreen").addEventListener("click", function () {
        player01.color = "darkolivegreen";
        document.getElementById("p2ColRed").classList.remove("hidden");
        document.getElementById("p2ColBlue").classList.remove("hidden");
        document.getElementById("p2ColGreen").classList.add("hidden");
        document.getElementById("p2ColMagenta").classList.remove("hidden");
        document.getElementById("p2ColBlack").classList.remove("hidden");
    });
    document.getElementById("p1ColMagenta").addEventListener("click", function () {
        player01.color = "darkmagenta";
        document.getElementById("p2ColRed").classList.remove("hidden");
        document.getElementById("p2ColBlue").classList.remove("hidden");
        document.getElementById("p2ColGreen").classList.remove("hidden");
        document.getElementById("p2ColMagenta").classList.add("hidden");
        document.getElementById("p2ColBlack").classList.remove("hidden");
    });
    document.getElementById("p1ColBlack").addEventListener("click", function () {
        player01.color ="#444444";
        document.getElementById("p2ColRed").classList.remove("hidden");
        document.getElementById("p2ColBlue").classList.remove("hidden");
        document.getElementById("p2ColGreen").classList.remove("hidden");
        document.getElementById("p2ColMagenta").classList.remove("hidden");
        document.getElementById("p2ColBlack").classList.add("hidden");
    });
    document.getElementById("p2ColRed").addEventListener("click", function () {
        player02.color = "firebrick";
        document.getElementById("p1ColRed").classList.add("hidden");
        document.getElementById("p1ColBlue").classList.remove("hidden");
        document.getElementById("p1ColGreen").classList.remove("hidden");
        document.getElementById("p1ColMagenta").classList.remove("hidden");
        document.getElementById("p1ColBlack").classList.remove("hidden");
    });
    document.getElementById("p2ColBlue").addEventListener("click", function () {
        player02.color = "royalblue";
        document.getElementById("p1ColRed").classList.remove("hidden");
        document.getElementById("p1ColBlue").classList.add("hidden");
        document.getElementById("p1ColGreen").classList.remove("hidden");
        document.getElementById("p1ColMagenta").classList.remove("hidden");
        document.getElementById("p1ColBlack").classList.remove("hidden");
    });
    document.getElementById("p2ColGreen").addEventListener("click", function () {
        player02.color = "darkolivegreen";
        document.getElementById("p1ColRed").classList.remove("hidden");
        document.getElementById("p1ColBlue").classList.remove("hidden");
        document.getElementById("p1ColGreen").classList.add("hidden");
        document.getElementById("p1ColMagenta").classList.remove("hidden");
        document.getElementById("p1ColBlack").classList.remove("hidden");
    });
    document.getElementById("p2ColMagenta").addEventListener("click", function () {
        player02.color = "darkmagenta";
        document.getElementById("p1ColRed").classList.remove("hidden");
        document.getElementById("p1ColBlue").classList.remove("hidden");
        document.getElementById("p1ColGreen").classList.remove("hidden");
        document.getElementById("p1ColMagenta").classList.add("hidden");
        document.getElementById("p1ColBlack").classList.remove("hidden");
    });
    document.getElementById("p2ColBlack").addEventListener("click", function () {
        player02.color = "#444444";
        document.getElementById("p1ColRed").classList.remove("hidden");
        document.getElementById("p1ColBlue").classList.remove("hidden");
        document.getElementById("p1ColGreen").classList.remove("hidden");
        document.getElementById("p1ColMagenta").classList.remove("hidden");
        document.getElementById("p1ColBlack").classList.add("hidden");
    });
    document.getElementById("startGame").addEventListener("click", function () {
        player01.name = document.getElementById("player1Name").value;
        player02.name = document.getElementById("player2Name").value;
        localStorage.setItem("gameCurPlay","1");
        localStorage.setItem("gamePlay1Name",player01.name);
        localStorage.setItem("gamePlay1Color",player01.color);
        localStorage.setItem("gamePlay2Name",player02.name);
        localStorage.setItem("gamePlay2Color",player02.color);
        $("#setupGame").slideUp(100);
        $("#game").slideDown(100);
        createBoard();
    });
}
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
        storedColor = "antiquewhite";
    }
    return storedColor;
}
//Store the game
function save(){
    localStorage.setItem("gameStatus","true");
    localStorage.setItem("gameColor",color);
    localStorage.setItem("gameCurPlay",curPlay);
    localStorage.setItem("gamePlay1Name",player01.name);
    localStorage.setItem("gamePlay1Color",player01.color);
    localStorage.setItem("gamePlay2Name",player02.name);
    localStorage.setItem("gamePlay2Color",player02.color);
    localStorage.setItem("gameStatusArray0",a[0].toString());
    localStorage.setItem("gameStatusArray1",a[1].toString());
    localStorage.setItem("gameStatusArray2",a[2].toString());
    localStorage.setItem("gameStatusArray3",a[3].toString());
    localStorage.setItem("gameStatusArray4",a[4].toString());
    localStorage.setItem("gameStatusArray5",a[5].toString());
    localStorage.setItem("gameStatusArray6",a[6].toString());
}
//Recall the game
function recall() {
    color = localStorage.getItem("gameColor");
    curPlay = localStorage.getItem("gameCurPlay");
    player01.name = localStorage.getItem("gamePlay1Name");
    player01.color = localStorage.getItem("gamePlay1Color");
    player02.name = localStorage.getItem("gamePlay2Name");
    player02.color = localStorage.getItem("gamePlay2Color");
    a[0] = localStorage.getItem("gameStatusArray0").split(",");
    a[1] = localStorage.getItem("gameStatusArray1").split(",");
    a[2] = localStorage.getItem("gameStatusArray2").split(",");
    a[3] = localStorage.getItem("gameStatusArray3").split(",");
    a[4] = localStorage.getItem("gameStatusArray4").split(",");
    a[5] = localStorage.getItem("gameStatusArray5").split(",");
    a[6] = localStorage.getItem("gameStatusArray6").split(",");
}
//Changes the color and feedback.
function changePlayer(){
    if (curPlay === "1"){
        curPlay = "2";
        color = player02.color;
        feedback.innerHTML = (player02.name + ", please select a column.");
    }else{
        curPlay = "1";
        color = player01.color;
        feedback.innerHTML = (player01.name + ", please select a column.");
    }
}
//Checks vertical for winner
function vertical(i){
    let p1Amount = 0;
    let p2Amount = 0;
    for(let j=a[i].length-1; j>=0;j--){
        if (a[i][j]===player01.color){
            p2Amount = 0;
            p1Amount++;
            if (p1Amount === 4){
                winner(player01);
                break;
            }
        }else if (a[i][j]===player02.color){
            p1Amount = 0;
            p2Amount++;
            if (p2Amount===4){
                winner(player02);
                break;
            }
        }else{
            p1Amount = 0;
            p2Amount = 0;
            break;
        }
    }
}
//Checks horizontal for winner
function horizontal(i){
    let p1Amount = 0;
    let p2Amount = 0;
    for(let j = a[0][0].length-1; j >= 0; j--){
        if (a[j][i] === player01.color){
            p2Amount = 0;
            p1Amount++;
            if (p1Amount === 4){
                winner(player01);
                break;
            }
        }else if (a[j][i] === player02.color){
            p1Amount = 0;
            p2Amount++;
            if (p2Amount === 4){
                winner(player02);
                break;
            }
        }else{
            p1Amount = 0;
            p2Amount = 0;
        }
    }
}
//Checks diagonal from top left, down to the right
function diagLR(i,j){
    let diagArray = [];
    for (j;j>0&&i>0;j--){
        i--;
    }
    if (i>j){
        for (i;i<7;i++){
            diagArray.push(a[i][j]);
            j++;
        }
    } else {
        for (j;j<6;j++){
            diagArray.push(a[i][j]);
            i++;
        }
    }
    checkDiagArray(diagArray);
}
//Checks diagonal from top right down to the left
function diagRL(i,j){
    let diagArray = [];
    for (j;j>0&&i<6;j--){
        i++;
    }
    for (i;i>=0;i--){
        diagArray.push(a[i][j]);
        j++;
    }
    checkDiagArray(diagArray);
}
//Function to check the diagonal array
function checkDiagArray(array){
    let p1Amount = 0;
    let p2Amount = 0;
    for (let i =0;i<array.length;i++){
        if (array[i] === player01.color && array[i+1] === player01.color){
            p2Amount = 0;
            p1Amount++;
            if (p1Amount === 3){
                winner(player01);
                break;
            }
        }
        if (array[i] === player02.color && array[i+1] === player02.color){
            p1Amount = 0;
            p2Amount++;
            if (p2Amount===3){
                winner(player02);
                break;
            }
        }
        if (array[i]==="free"){
            p1Amount = 0;
            p2Amount = 0;
        }
    }
}
//Winner is found!
function winner(player){
    canvas.fillStyle = player.color;
    canvas.fillRect(0,0,540,480);
    canvas.fillStyle = "White";
    canvas.textAlign = "center";
    canvas.font = "70px Verdana";
    canvas.fillText(player.name, 270, 180);
    canvas.fillText("WINS!", 270, 260);
    canvas.font = "20px Verdana";
    canvas.fillText('Click the "Reset Board" button to play again', 270, 350);
    $(".feedback").slideUp(100);
    $("#colButtons").slideUp(100);
}
//Place pieces
function place(n){
    for (let i = (a[n].length-1); i >= 0; i--){
        if (a[n][i] === "free"){
            //Draw colored circle
            circle(((n * 76) + 40), ((i * 76) + 40), 28, "black", color);
            a[n][i] = color;
            //Hides the column button if column is full
            if (a[n][0] !== "free"){
                document.getElementById("col" + n).classList.add("hidden");
            }
            changePlayer();
            save();
            vertical(n);
            horizontal(i);
            diagLR(n,i);
            diagRL(n,i);
            break;
        }
    }
}
//Create the game board
function createBoard(){
    $("#game").slideDown(100);
    $(".feedback").slideDown(100);
    $("#colButtons").slideDown(200);
    $("#setupGame").slideUp(100);
    canvas.fillStyle = "goldenrod";
    canvas.fillRect(0,0,540,480);
    if (localStorage.getItem("gameStatus")==="true") { //There is a saved game
        recall();
        //Set user turn feedback
        if (curPlay === "1"){
            feedback.innerHTML = (player01.name + ", please select a column.");
        }else{
            curPlay = "2";
            feedback.innerHTML = (player02.name + ", please select a column.");
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
        curPlay = "1";
        color = player01.color;
        feedback.innerHTML = (player01.name + ", please select a column.");
        for (let i = 0; i < a.length; i++){
            for (let j = 0;j<a[i].length;j++){
                circle(((i * 76) + 40), ((j * 76) + 40), 28, "black", "antiquewhite");
            }
        }
    }
    //Makes sure the button are not hidden
    for (let m = 0; m < 7; m++) {
        document.getElementById("col" + m).classList.remove("hidden");
    }
    save();
}
//Reset the game
function reset(){
    $("#game").slideUp(100);
    $("#setupGame").slideDown(100);
    localStorage.removeItem("gameStatus");
    localStorage.removeItem("gameColor");
    localStorage.removeItem("gameCurPlay");
    localStorage.removeItem("gamePlay1Name");
    localStorage.removeItem("gamePlay1Color");
    localStorage.removeItem("gamePlay2Name");
    localStorage.removeItem("gamePlay2Color");
    document.getElementById("p1ColRed").classList.remove("hidden");
    document.getElementById("p1ColBlue").classList.remove("hidden");
    document.getElementById("p1ColGreen").classList.remove("hidden");
    document.getElementById("p1ColMagenta").classList.remove("hidden");
    document.getElementById("p1ColBlack").classList.remove("hidden");
    document.getElementById("p2ColRed").classList.remove("hidden");
    document.getElementById("p2ColBlue").classList.remove("hidden");
    document.getElementById("p2ColGreen").classList.remove("hidden");
    document.getElementById("p2ColMagenta").classList.remove("hidden");
    document.getElementById("p2ColBlack").classList.remove("hidden");
    setup();
}
window.onload = function(){
    if (localStorage.getItem("gameStatus")==="true"){
        createBoard();
    }else{
        setup();
    }
};