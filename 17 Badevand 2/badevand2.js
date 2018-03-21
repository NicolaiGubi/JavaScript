let badevand = [-1, 1, 1, 1, 2, 0, 1 ,-0.1, 0.1, -20, -4, 10];
let count1 = 0;
let count2 = 0;
let num1 = 0;
let num2 = 0;

for (let i=0;i < badevand.length ;i++){
    console.log(badevand[i]);
    if (badevand[i]<0){
        count1++;
    }

    if (i<badevand.length) {
        num1 = badevand[i];
        num2 = badevand[i + 1];
        if (num1 > num2) {
            count2++;
        }
    }
}
let feedback = ("There are " + count1 + " days with minus degrees.");
document.getElementById("h1").innerHTML += feedback;
 feedback = ("<br>" + "There have been " + count2 + " days with raising temperatures.");
document.getElementById("h1").innerHTML += feedback;
