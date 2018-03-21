/*
function Animal(name,makeSoundFunction){

    this.name = name;
    this.makeSound = makeSoundFunction
}

let dog = new Animal("Fido",function(){
    document.getElementById("output").innerHTML = "WOOF"}
);



let cat = new Animal("Garfield", function(){
    document.getElementById("output").innerHTML = "MIAOW"}
);

*/
//TODO Add another animal





//More clever solution below:

function Animal(name,sound){
    this.name = name;
    this.sound = sound;
    this.makeSound = function(){
        document.getElementById("output").innerHTML = this.sound;
    }
}

let dog = new Animal("Rex", "WROOF");
let cat = new Animal("Garfield", "MIAOW");
let sheep = new Animal("Dolly", "BAAAH");