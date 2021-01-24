
let reco1 = document.getElementById("videorec");
let show1 = true;
let reco2 = document.getElementById("videorec2");
let show2 = false;
let reco3 = document.getElementById("videorec3"); 
let show3 = false;

let leftDot = document.getElementById("dot1");
let midDot = document.getElementById("dot2");
let rightDot = document.getElementById("dot3");

reco2.style.display = "none";
reco3.style.display = "none";

midDot.style.display ="none";
rightDot.style.display ="none";


function left() {
    document.querySelectorAll('iframe').forEach(v => { v.src = v.src });
    document.querySelectorAll('video').forEach(v => { v.pause() });
if(show1 == true) {
    reco1.style.display = "none";
    reco3.style.display = "";
    show1 = false;
    show3 = true;

    leftDot.style.display ="none";
    midDot.style.display ="none";
    rightDot.style.display ="";
}
else if (show3 == true) {
    reco3.style.display = "none";
    reco2.style.display = "";
    show3 = false;
    show2 = true;

    leftDot.style.display ="none";
    midDot.style.display ="";
    rightDot.style.display ="none";
}
else if (show2 == true) {
    reco2.style.display = "none";
    reco1.style.display = "";
    show2 = false;
    show1 = true;

    leftDot.style.display ="";
    midDot.style.display ="none";
    rightDot.style.display ="none";
}
}
function right() {
    document.querySelectorAll('iframe').forEach(v => { v.src = v.src });
    document.querySelectorAll('video').forEach(v => { v.pause() });
    if(show1 == true) {
        reco1.style.display = "none";
        reco2.style.display = "";
        show1 = false;
        show2 = true;

        leftDot.style.display ="none";
        midDot.style.display ="";
        rightDot.style.display ="none";
    }
    else if (show2 == true) {
        reco2.style.display = "none";
        reco3.style.display = "";
        show2 = false;
        show3 = true;

        leftDot.style.display ="none";
        midDot.style.display ="none";
        rightDot.style.display ="";
    }
    else if (show3 == true) {
        reco3.style.display = "none";
        reco1.style.display = "";
        show3 = false;
        show1 = true;

        leftDot.style.display ="";
        midDot.style.display ="none";
        rightDot.style.display ="none";
    }
    }

