let a = Number(prompt("What is A?"));
let b = Number(prompt("What is B?"));
let c = Number(prompt("What is C?"));

let resX = (b*b)-(4*a*c);
if (resX > 0){
    let resY = (-b + Math.sqrt(resX))/(2*a);
    let resZ = (-b - Math.sqrt(resX))/(2*a);
    alert("Der er to rødder. Løsningen er: " + resY + " og " + resZ + " med discriminanten: " + resX);
}else if (resX === 0){
    let resY = (-b + Math.sqrt(resX))/(2*a);
    alert("Der er en rod. Løsningen er: " + resY + " med discriminanten: " + resX);
}else{
    alert("Der er ingen rødder! Discriminanten er: " + resX);
}