function bringUmbrella() {
    let num1 = document.getElementById("num1").value;

    let radio1 = document.getElementById("radio1").checked; //Shining
    let radio2 = document.getElementById("radio2").checked; //Raining
    let radio3 = document.getElementById("radio3").checked; //Gray

    let feedback = document.getElementById("result");
    if (radio1){
        if (num1>12 && num1<15){
            feedback.innerHTML = ("You should bring an umbrella.");
        } else{
            feedback.innerHTML = ("You do not need an umbrella.");
        }
    } else if (radio2){
        feedback.innerHTML = ("You should bring an umbrella.");
    } else if (radio3){
        feedback.innerHTML = ("You do not need an umbrella.");
    }
}