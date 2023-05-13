// Get the user's data from session storage
var username = sessionStorage.getItem("username");
var name = sessionStorage.getItem("name");

// // Get the user's data from cookies
// var username = getCookie("username");
// var name = getCookie("name");

function checkLoginStatus() {
    if (username) {
      // user is logged in, show the logout button and hide the login button
      document.getElementById("login-btn").style.display = "none";
      document.getElementById("register-btn").style.display = "none";
      document.getElementById("logout-btn").style.display = "block";
    } else {
      // user is not logged in, show the login button and hide the logout button
      document.getElementById("register-btn").style.display = "block";
      document.getElementById("login-btn").style.display = "block";
      document.getElementById("logout-btn").style.display = "none";
    }
}


window.addEventListener("load", checkLoginStatus);


document.getElementById("logout-btn").addEventListener("click", function() {
  // perform logout logic here
  sessionStorage.removeItem("username");
  sessionStorage.removeItem("name");
  sessionStorage.removeItem("email");
  window.location.reload();
  // checkLoginStatus();
});
