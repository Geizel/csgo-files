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
    alert("cat");
    var profile = googleUser.getBasicProfile();
    getElementById("sign-in").style.display = "none";
    profile.getName();
    profile.getImageUrl();
  }


  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
    });
  }