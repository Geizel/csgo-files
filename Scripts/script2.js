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

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();

    var element = document.getElementById("g-signin2");
    element.style.display = "hide";

    var image = document.createElement("img")
    image.setAttribute("src", profile.getImageUrl())
    element.append(image)
  }


  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
    });
  }