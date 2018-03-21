let loggedInState = false;
let username = null;
let password = null;

    function login(){
    username = document.getElementById("username");
    password = document.getElementById("password");
    if (username.value === "Nicolai" && password.value === "1111"){
        loggedInState = true;
        updategui();
    }else{
        username.value = "";
        password.value = "";
    }
}

function updategui(){
    if (loggedInState === true){
        document.getElementById("logindiv").hidden = true;
        document.getElementById("loggedindiv").hidden = false;
        document.getElementById("name").innerHTML = ("som " + username.value);
    } else {
        document.getElementById("logindiv").hidden = false;
        document.getElementById("loggedindiv").hidden = true;
    }
}

function logout(){
    loggedInState = false;
    username.value = "";
    password.value = "";
    username = null;
    password = null;
    document.getElementById("name").innerHTML = null;
    updategui();
}