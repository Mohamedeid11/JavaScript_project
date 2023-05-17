let profile = document.getElementById("profile") ;

console.log(profile)

profile.innerHTML =
 `
    <div class="card-header" style="height: 60px;">
        <h5 class="card-title limit-paragraph-line text-center">${Name}</h5>
    </div>
    <img class="card-img-top" height="400"  src="images/user.png" alt="my profile">
    <div class="card-body">
        <h5 class="card-text limit-paragraph-line">User Name </h5>
        <p class="card-text limit-paragraph-line">${username}</p>
        <h5 class="card-text limit-paragraph-line">Email </h5>
        <p class="card-text limit-paragraph-line">${Email}</p>
    </div>
 `;