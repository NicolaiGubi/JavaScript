function tellMe(event){
    let key = event.keyCode;
    if (key === 13){
        let input = document.getElementById("inputText").value;
        alert("You wrote: "+input);
    }
}

