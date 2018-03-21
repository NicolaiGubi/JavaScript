let loggedInState;
let username = null;
let password = null;

function login(){
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    if (username === "Nicolai" && password === "1111"){
        loggedInState = true;
        localStorage.setItem("loggedInAs", "Nicolai");
        updategui();
    }else{
        username = "";
        password = "";
    }
}

function updategui(){
    if (loggedInState === true){
        document.getElementById("logindiv").hidden = true;
        document.getElementById("loggedindiv").hidden = false;
        document.getElementById("name").innerHTML = ("som " + username);
    } else {
        document.getElementById("logindiv").hidden = false;
        document.getElementById("loggedindiv").hidden = true;
        localStorage.setItem("loggedInAs", null);
    }
}

function logout(){
    loggedInState = false;
    username = null;
    password = null;
    document.getElementById("name").innerHTML = null;
    updategui();
}

window.onload = function(){
    let getState = localStorage.getItem("loggedInAs");
    console.log(getState);
    if (getState === "Nicolai"){
        loggedInState = true;
        console.log(loggedInState);
        username = "Nicolai";
    }
    updategui();
};

