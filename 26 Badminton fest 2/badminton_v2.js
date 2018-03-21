function checkEnter(){
    let age = document.getElementById("age").value;
    let indian = document.getElementById("radioIndian").checked;
    let cowboy = document.getElementById("radioCowboy").checked;
    let other = document.getElementById("radioOther").checked;

    if (age > 14 && age < 18){
        if (indian||cowboy){
            document.getElementById("feedback").innerHTML = "Welcome to the party!"
        }else if (other){
            document.getElementById("feedback").innerHTML = "Sorry you are not dressed right."
        }else {
            document.getElementById("feedback").innerHTML = "Are you not dressed?"
        }
    }else if (age >= 18){
        document.getElementById("feedback").innerHTML = "Sorry you are to old."
    }else if (age <= 14){
        document.getElementById("feedback").innerHTML = "Sorry you are to young."
    }else{
        document.getElementById("feedback").innerHTML = "Did you forget your age."
    }
}