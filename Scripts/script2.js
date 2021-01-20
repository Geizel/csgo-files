
let dropc = document.getElementById("dropContent")
let oop = true;

function drop() {
    if(oop == true) {
        dropc.style.display = "block";
        oop = false;
    }
    else {
        dropc.style.display = "none";
        oop = true;

}
} 