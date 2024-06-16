 // validation control 

 function validation_login() {
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;

    if (name === "") {
        alert("Please enter your name.");
        return false;
    }

    if (name.length < 5 || name.length > 20) {
        alert("Name must be between 5 and 20 characters.");
        return false;
    }

    if (password === "") {
        alert("Please enter your password.");
        return false;
    }

    if (password.length < 8 || password.length > 16) {
        alert("Password must be between 8 and 16 characters.");
        return false;
    }

    return true;
}


 function validation_signup() {
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    var confirmpassword = document.getElementById("confirmpassword").value;

    if (name === "") {
        alert("Please enter your name.");
        return false;
    }

    if (name.length < 5 || name.length > 20) {
        alert("Name must be between 5 and 20 characters.");
        return false;
    }

    if (password === "") {
        alert("Please enter your password.");
        return false;
    }

    if (password.length < 8 || password.length > 16) {
        alert("Password must be between 8 and 16 characters.");
        return false;
    }

    if (confirmpassword === "") {
        alert("Please enter confirmation password.");
        return false;
    }

    if (confirmpassword !== password) {
        alert("Passwords don't match");
        return false;
    }

    return true;
}
 
function validation_update() {
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    var confirmpassword = document.getElementById("confirmpassword").value;
    var newpassword = document.getElementById("newpassword").value;

    if (name === "") {
        alert("Please enter your name.");
        return false;
    }

    if (name.length < 5 || name.length > 20) {
        alert("Name must be between 5 and 20 characters.");
        return false;
    }

    if (password === "") {
        alert("Please enter your password.");
        return false;
    }

    if (password.length < 8 || password.length > 16) {
        alert("Password must be between 8 and 16 characters.");
        return false;
    }

    if (confirmpassword === "") {
        alert("Please enter confirmation password.");
        return false;
    }

    if (confirmpassword !== password) {
        alert("Passwords don't match");
        return false;
    }

    if (newpassword === "") {
        alert("Please enter your new password.");
        return false;
    }

    if (newpassword.length < 8 || newpassword.length > 16) {
        alert("New password must be between 8 and 16 characters.");
        return false;
    }

    if (confirmpassword !== newpassword) {
        alert("Passwords don't match");
        return false;
    }

    return true;
}

