function pyramid () {
    let n = document.getElementById("num").value;
    document.getElementById("output").innerHTML = "";

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < n - i; j++) {
            document.getElementById("output").innerHTML += "...";
        }
        for (let k = 0; k < 2 * i - 1; k++) {
            document.getElementById("output").innerHTML += "A";
        }
        for(let m = (n-i-1); m >= 0; m--){
            document.getElementById("output").innerHTML += "...";
        }
        document.getElementById("output").innerHTML += "<br>";
    }
}