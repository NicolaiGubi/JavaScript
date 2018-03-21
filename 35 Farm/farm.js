let animals = []; //No animals in array yet...

function Animal(type, sound){
    this.type = type;
    this.makeSound = function(){alert("The " + type + " says: " + sound)}

}


animals.push(new Animal("cat", "MIAU"));
animals.push(new Animal("dog", "WHOOF"));
animals.push(new Animal("sheep", "BAAAH"));


//Print something interesting to the DOM
for (let i = 0; i<animals.length;i++) {
    //adds a button with an onclick eventhandler that makes a sound!
    document.getElementById("animaldiv").innerHTML +=
        "<BR><button onclick='animals[" + i + "].makeSound()'>" + animals[i].type + "</button> "

}