function operation (){
    let password = document.querySelector ("#Password").value;
    let confirmPassword = document.querySelector ("#ConfirmPassword").value;

    if (password === confirmPassword) {
        alert("Access Granted");
    } else {
        alert("Access Denied. Passwords do not match.");
    }
}
//)