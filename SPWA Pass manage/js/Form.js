const loginForm = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");

loginForm.addEventListener("submit", (e) => {
	e.preventDefault();

	if (username.value === "Username12" && password.value === "Password12") {

        window.location.href = "home.html";
	
	} else {
		alert("Invalid username or password");
	}
});