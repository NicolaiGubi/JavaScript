let badevand = [-1, 1, 1, 1, 2, 0, 1 ,-0.1, 0.1, -20, -4, 10];
let count = 0;

for (let i=0;i < badevand.length ;i++){
    if (badevand[i]<0){
        count++
    }
}
let feedback = ("There are " + count + " days with minus degrees.");
document.getElementById("h1").innerHTML = feedback;
