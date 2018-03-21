let a = Number(prompt("What is A?"));
let b = Number(prompt("What is B?"));
let c = Number(prompt("What is C?"));

function secondDegree () {
    let resX = (b * b) - (4 * a * c);
    if (resX > 0) {
        let resY = (-b + Math.sqrt(resX)) / (2 * a);
        let resZ = (-b - Math.sqrt(resX)) / (2 * a);
        alert("Der er to rødder. Løsningen er: " + resY + " og " + resZ + " med discriminanten: " + resX);
    } else if (resX === 0) {
        let resY = (-b + Math.sqrt(resX)) / (2 * a);
        alert("Der er en rod. Løsningen er: " + resY + " med discriminanten: " + resX);
    } else {
        alert("Der er ingen rødder! Discriminanten er: " + resX);
    }
}

function line(){
    let resX = -c/b;
    alert("Det er en ret linje, skæringen med x-aksen er: " + resX);
}

if ((a===0)&&(b===0)){
    alert("Det er en vandret linje - der er ingen rødder");
}else if (a===0){
    line();
}else{
    secondDegree();
}