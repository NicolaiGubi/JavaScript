let a = Number(prompt("What is A?"));
let b = Number(prompt("What is B?"));
let c = Number(prompt("What is C?"));

let resX = (b*b)-(4*a*c);
let resY = (-b + Math.sqrt(resX))/(2*a);
let resZ = (-b - Math.sqrt(resX))/(2*a);

alert("Løsningen er: " + resY + " and " + resZ + " med discriminanten " + resX);