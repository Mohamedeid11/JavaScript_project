// Get the user's data from session storage
var username = sessionStorage.getItem("username");
var name = sessionStorage.getItem("name");

// // Get the user's data from cookies
// var username = getCookie("username");
// var name = getCookie("name");

function checkLoginStatus() {
    if (username) {
      // user is logged in, show the logout button and hide the login button  
      document.getElementById("logout-btn").style.display = "block";
      document.getElementById("home-page").style.display = "block";
      document.getElementById("courses-page").style.display = "block";

      return true;

    } else {

      // user is not logged in, show the login button and hide the logout button
      document.getElementById("register-btn").style.display = "block";
      document.getElementById("login-btn").style.display = "block";

      // here to reload to login page if not logged in and visit any page except register and login
      if(window.location.pathname != '/signin.html' && window.location.pathname != '/signup.html' && window.location.pathname != '/index.html'){
      
        window.location.href = "signin.html";

      }

      // console.log(window.location.pathname)
      return false;
    }

}

// this to check the login status when reload a new page 
window.addEventListener("load", checkLoginStatus);


document.getElementById("logout-btn").addEventListener("click", function() {
  // perform logout logic here
  sessionStorage.removeItem("username");
  sessionStorage.removeItem("name");
  sessionStorage.removeItem("email");
  window.location.href = "signin.html";  // checkLoginStatus();
});
