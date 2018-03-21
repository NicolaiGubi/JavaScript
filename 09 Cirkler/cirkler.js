let canvas = document.getElementById("myCanvas").getContext('2d');

function circle(a,b,c){
    canvas.beginPath();
    canvas.arc(a,b,10,0,Math.PI*2);
    canvas.fillStyle = c;
    canvas.fill();
}

let image = document.getElementById("cow");
canvas.drawImage(image,10,10,160,160);


circle(100,30,"green");
circle(40,10,"red");
circle(50,300,"blue");


