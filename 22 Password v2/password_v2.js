
function checkPass(){
    let password = document.getElementById("passIn").value;
    //document.getElementById("feedback").innerText = "Your password is "+ password;

    if (password == 12345) {
        document.getElementById("feedback").innerHTML = "Your password is OK, welcome";
    }else{
        document.getElementById("feedback").innerHTML = "Your password is <b>NOT</b> correct!";
    }

}