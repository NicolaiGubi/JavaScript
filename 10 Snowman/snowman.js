let canvas = document.getElementById("myCanvas").getContext('2d');
let zeroX ;
let zeroY ;
/*
function background() {
    let imageObj = new Image();
    imageObj.onload = function () {
        canvas.drawImage(imageObj, 0, 0);
    };
    imageObj.src = "http://img10.deviantart.net/2772/i/2011/199/a/1/wonderful_winterland_15025941_by_stockproject1-d40kuq6.jpg";
}
*/
function backgroundDark (){
    let image1 = document.getElementById("backgroundDark");
    canvas.drawImage(image1,0,0,900,675);
}
function backgroundSun (){
    let image2 = document.getElementById("backgroundSun");
    canvas.drawImage(image2,0,0,900,675);
}

function triangle (startX,startY,width,height,color){
    canvas.beginPath();
    canvas.lineWidth="1";
    canvas.strokeStyle = color;
    canvas.moveTo(startX,startY);
    canvas.lineTo(startX+width,startY);
    canvas.stroke();
    canvas.lineTo((width/2)+startX,startY+height);
    canvas.stroke();
    canvas.lineTo(startX,startY);
    canvas.stroke();
    canvas.fillStyle = color;
    canvas.fill();
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

function horLine(startX,startY,width,lenght,color){
    canvas.beginPath();
    canvas.lineWidth=width;
    canvas.strokeStyle = color;
    canvas.moveTo(startX,startY);
    canvas.lineTo(startX+lenght,startY);
    canvas.stroke();
}

function rect(x,y,sizeX,sizeY,color){
    canvas.beginPath();
    canvas.rect(x,y,sizeX,sizeY);
    canvas.fillStyle = color;
    canvas.fill();
}

function curve(startX,startY,endX,endY,size,width,color){
    canvas.beginPath();
    canvas.moveTo(startX, startY);
    canvas.quadraticCurveTo(((endX-startX)/2+startX), (startY+size), endX, endY);
    canvas.lineWidth = width;
    canvas.strokeStyle = color;
    canvas.stroke();
}

let sun = confirm("Is the sun shining?");
let temperature = Number(prompt("What is the temperature?"));

//Background
if (sun && (temperature>-5 && temperature<0)){
    backgroundSun();
    //New Zero location
    zeroX = 180;
    zeroY = 550;
}else{
    backgroundDark();
    //New Zero location
    zeroX = 750;
    zeroY = 650;
}

//Draw Body
circle(zeroX,zeroY,100,"black","white");
circle(zeroX,zeroY-150,80,"black","white");
circle(zeroX,zeroY-260,50,"black","white");

//Draw Eyes
circle(zeroX-18,zeroY-265,2,"black","blue");
circle(zeroX+18,zeroY-265,2,"black","blue");

//Draw Mouth
if (sun && (temperature>-5 && temperature<0)){
    curve((zeroX-20),(zeroY-235),(zeroX+20),(zeroY-235),10,4,"black");
    curve((zeroX-20),(zeroY-235),(zeroX+20),(zeroY-235),18,4,"black");
} else{
    curve((zeroX-20),(zeroY-232),(zeroX+20),(zeroY-232),-10,4,"black");
}

//Draw Nose
triangle(zeroX-7,zeroY-250,14,38,"orange");
circle(zeroX,zeroY-250,5,"orange","orange");

//Draw Hat
rect(zeroX-40,zeroY-345,80,50,"black");
horLine(zeroX-60,zeroY-295,4,120,"black");