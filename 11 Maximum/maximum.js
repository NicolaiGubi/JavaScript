function showMax() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let num3 = document.getElementById("num3").value;
    let result = Math.max(num1,num2,num3);
    let feedback = document.getElementById("result");
    feedback.innerHTML = ("Your result is: " + result);
}

function showMin() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let num3 = document.getElementById("num3").value;
    let result = Math.min(num1,num2,num3);
    let feedback = document.getElementById("result");
    feedback.innerHTML = ("Your result is: " + result);
}

function showMaxAlt(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let num3 = Number(document.getElementById("num3").value);
    let result = 0;

    if (num1 > num2){
        if (num1 > num3){
            result = num1 //num1 er størst
        }else{
            result = num3 //num3 er størst
        }
    }else{
        if (num2 > num3){
            result = num2 //num2 er størst
        } else{
            result = num3 //num3 er størst
        }
    }

    let feedback = document.getElementById("result");
    feedback.innerHTML = ("Your result is: " + result);
}

function showMinAlt(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let num3 = Number(document.getElementById("num3").value);
    let result = 0;

    if (num1 < num2){
        if (num1 < num3){
            result = num1 //num1 er mindst
        }else{
            result = num3 //num3 er mindst
        }
    }else{
        if (num2 < num3){
            result = num2 //num2 er mindst
        } else{
            result = num3 //num3 er mindst
        }
    }

    let feedback = document.getElementById("result");
    feedback.innerHTML = ("Your result is: " + result);
}