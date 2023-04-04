var usernameInput = document.getElementById("user-name");
var passwordInput = document.getElementById("password");
var text = document.getElementById("text");
var text2 = document.getElementById("text2");
var btn = document.getElementById("btn");


btn.onclick = function () {
    if (usernameInput.value.length == "") {
        usernameInput.style.marginBottom = "0px"
        text.innerText = "Plz enter you name";
        text.style.color = "red"
        text.style.marginBottom = "1em"
        return false;
    } else if (usernameInput.value.length > 20) {
        usernameInput.style.marginBottom = "0px"
        text.innerText = "Your name is too long. Name character allow only 1-20 characters..!"
        text.style.color = "red"
        text.style.marginBottom = "1em"
        return false;
    } else if (passwordInput.value.length == "") {
        passwordInput.style.marginBottom = "0px"
        text2.innerText = "Plz enter your password";
        text2.style.color = "red"
        text2.style.marginBottom = "1em"
        return false;
    } else if (passwordInput.value.length >= 20) {
        passwordInput.style.marginBottom = "0px"
        text2.innerText = "Your password is too long. Passowrd numbers allow only 1-20 numbers..!"
        text2.style.color = "red"
        text2.style.marginBottom = "1em"
        return false;
    }
    else {
        usernameInput.style.marginBottom = ""
        text.innerText = ""
        text.style.marginBottom = ""
        passwordInput.style.marginBottom = ""
        text2.innerText = ""
    }
}

usernameInput.oninput = function () {
    if (usernameInput.value.length >= 1 && usernameInput.value.length <= 20) {
        usernameInput.style.marginBottom = "0px"
        passwordInput.style.pointerEvents = "all";
        passwordInput.style.userSelect = "all";
        passwordInput.style.backgroundColor = "#2e2d2d";
        text.innerText = "success";
        text.style.color = "#34ff34";
        text.style.marginBottom = "1em"
    } else if (usernameInput.value.length > 20) {
        usernameInput.style.marginBottom = "0px"
        passwordInput.style.pointerEvents = "none";
        passwordInput.style.userSelect = "none";
        text.innerText = "Your name is too long. Name character allow only 1-20 characters..!";
        text.style.color = "red";
        text.style.marginBottom = "1em"
    } else {
        passwordInput.style.pointerEvents = "";
        passwordInput.style.userSelect = "";
        passwordInput.style.backgroundColor = "";
        text.innerText = "";
        usernameInput.style.marginBottom = ""
        text.style.marginBottom = ""
    }
}

passwordInput.oninput = function () {
    if (passwordInput.value.length >= 1 && passwordInput.value.length < 4) {
        passwordInput.style.marginBottom = "0px"
        text2.innerText = "Your password is too short. Minimum character are allow 4 character..!";
        text2.style.color = "red";
        text2.style.marginBottom = "1em"
    }
    else if (passwordInput.value.length >= 4 && passwordInput.value.length <= 20) {
        passwordInput.style.marginBottom = "0px"
        text2.innerText = "success"
        text2.style.color = "#34ff34"
        text2.style.marginBottom = "1em"
    }
    
    else if (passwordInput.value.length > 20) {
        passwordInput.style.marginBottom = "0px"
        text2.innerText = "Your password is too long. Passowrd character allow only 4-20 character..!";
        text2.style.color = "red";
        text2.style.marginBottom = "1em"
    }
    else {
        text2.innerText = ""
        passwordInput.style.marginBottom = ""
        text2.style.marginBottom = ""
    }
}


  