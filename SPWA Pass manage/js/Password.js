function savePassword() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    localStorage.setItem(username, password);
  }
  
  function retrievePassword() {
    var username = document.getElementById("username").value;
    var password = localStorage.getItem(username);
    if (password) {
      alert("The password for " + username + " is " + password);
    } else {
      alert("No password found for " + username);
    }
  }