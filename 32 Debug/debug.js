let badevand = [-1, 1, 1, 1, 2, 0, 1 ,-0.1, 0.1, -20, -4, 10, -10];

let rises = 0;

for (let i = 0; i+1 < badevand.length; i++){
    if (badevand[i]<badevand[i+1]){
        rises++;
    }

}

document.getElementById("output").innerHTML = "Antal stigninger: " + rises;