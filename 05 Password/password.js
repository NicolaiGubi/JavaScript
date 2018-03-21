function password (){
let pass = prompt("Enter Password");

if ((pass.length >= 5)&&(pass.length <= 8)){
    console.log("Password length ok.");
} else {
    console.log("Password must be between 5 and 8 characters!");
    password()
}
}
password();