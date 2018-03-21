

function tellMe(event){
    let key = event.keyCode;
    //let input = document.getElementById("inputText").value;
    document.getElementById("feedback").innerHTML += key;
}

function tellMeAlso(){
    let input = document.getElementById("inputText").value;
    document.getElementById("feedback2").innerHTML += input;
}

window.setInterval(function(){
    document.getElementById("feedback").innerHTML = "";
    document.getElementById("feedback2").innerHTML = "";
    document.getElementById("inputText").value = "";
},10000);