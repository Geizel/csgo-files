let dropc = document.getElementById("dropContent")
dropc.style.display="none"
function drop() {
    if(dropc.style.display == "none") {
        dropc.style.display = "block";
    }
}
window.addEventListener("mouseup", function(hide){
    if(hide.target !=dropc && hide.target.parentNode != dropc) {
        dropc.style.display = 'none';
    }
});