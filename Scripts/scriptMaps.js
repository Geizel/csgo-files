
videoLink1.addEventListener("click", show); 
videoLink2.addEventListener("click", show);    
videoLink3.addEventListener("click", show);    
videoLink4.addEventListener("click", show);  
videoLink5.addEventListener("click", show);
videoLink6.addEventListener("click", show);  
videoLink7.addEventListener("click", show);    
function show() {
    document.querySelectorAll('iframe').forEach(v => { v.src = v.src });
    document.querySelectorAll('video').forEach(v => { v.pause() });

    var allImages = document.querySelectorAll("iframe");
    for (var i = 0; i < allImages.length; i++) {
        allImages[i].className = "hide";
    }
    var vid = this.attributes["data-img"].value;
    var pic = document.getElementById(vid);
    if (pic.className === "hide") {
        pic.className = "";
    } else{
        pic.className = "hide";
    }
}


