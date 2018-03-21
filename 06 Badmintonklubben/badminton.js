function alder(){
    let alder = Number(prompt("Hvor gammel er du?"));
    if (alder < 14){
        alert("Øv! Du er desværre for ung til fest.");
    } else if (alder > 18){
        alert("Du er desværre for gammel til at være med.");
    } else {
        alert("Du må godt komme ind");
    }
}

let indianer = confirm("Er du klædt ud som Indianer?");
if (indianer){
    alder();
}else{
let cowboy = confirm("Er du klædt ud som Cowboy?");
if (cowboy){
    alder()
}else{
    alert("Øv! Skynd dig hjem og klæd om!");
}
}

