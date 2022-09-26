function validate(){
    var set_username = "admin";     // Set the USERNAME here
    var set_password = "admin";     // Set the PASSWORD here

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if(username == set_username && password == set_password)
    {
        window.location.href = "Homepage.html";
        return false;
    }

    else
    {
        alert("login failed, please try again.");
    }
}
    