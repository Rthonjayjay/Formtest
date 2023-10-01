// function operation (){
//     let password = document.querySelector ("#Password").value;
//     let confirmPassword = document.querySelector ("#ConfirmPassword").value;

//     if (password === confirmPassword) {
//         alert("Access Granted");
//     } else {
//         alert("Access Denied. Passwords do not match.");
//     }
// }
//)

let form = document.querySelector("form");

// document.addEventListener("form", function() {

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting

        let wordpass = document.querySelector("#Wordpass").value;
        let confirmPass = document.querySelector("#ConfirmPass").value;

        if (wordpass === confirmPass) {
            alert("Access Granted");
        } else {
            alert("Access Denied. Passwords do not match.");
        }
    });
// });