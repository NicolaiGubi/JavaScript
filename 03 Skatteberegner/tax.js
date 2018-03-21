//TODO: Udvid programmet så det også beregner bundskatten på 7.0%
//Done
let indkomst = Number(prompt("Indtast din indkomst:"));

let ambi = (indkomst * 8.0) /100;
let pension = (indkomst * 2.0)/100;
let bundskat = (indkomst * 7.0)/100;

//Skriver til konsollen istedet for at lave en popup - Tryk F12 i Chrome for at se konsollen og udvikler værktøjer
console.log("Arbejdsmarkedsbidrag: " + ambi);
console.log("Særlig pensionsopsapring: " + pension);
console.log("Bundskat: " + bundskat);

let samletskat = Math.round((8.0 + 2.0 + 7.0) /100 * indkomst);
console.log("Samlet skat: " + samletskat);