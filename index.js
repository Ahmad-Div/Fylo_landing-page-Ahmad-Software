//add dark theme to webstie


let darkThemeButton = document.getElementById("icon");

darkThemeButton.onclick = function () {
    setTimeout(changeWebMode, 200);
}

function changeWebMode() {
    document.body.classList.toggle("dark-mode");
    if (darkThemeButton.classList.contains("fa-moon")) {
        darkThemeButton.classList.remove("fa-moon");
        darkThemeButton.classList.add("fa-sun");
        document.body.style.backgroundColor = "#1B2430";
        document.getElementById("features").classList.remove("second-section-background");
    } else {
        darkThemeButton.classList.add("fa-moon");
        darkThemeButton.classList.remove("fa-sun");
        document.body.style.backgroundColor = "white";
        document.getElementById("features").classList.add("second-section-background");
    }
}





let emailButton = document.querySelectorAll(".sumbit-email-button");
let emailHolder = document.querySelectorAll(".email-input");
let alertBox = document.querySelector(".alert-email-input")
let alertMessage = document.querySelector(".alert-email-message");

//sign in button onClick event


let signIn = document.getElementById("sign-in");

signIn.onclick = function () {
    displayMessage("block", "Input your email in one of the boxes", 1, 0.5)
    setTimeout(removeMessage, 1000);
}






// input email event

for (let i = 0; i < emailButton.length; i++) {
    emailButton[i].addEventListener("click", SubmitButtonEvent);
}

function SubmitButtonEvent() {

    for (let i = 0; i < emailHolder.length; i++) {
        if (emailHolder[i].value == "" && emailHolder[i + 1].value == "") {
            displayMessage("block", "You have not entered any email!", 1, 0.5)
            setTimeout(removeMessage, 1000);
            break;
        } else {
            if ((emailHolder[i].value.includes("@gmail.com") &&
                emailHolder[i].value.length >= 10) || (emailHolder[i + 1].value.includes("@gmail.com") &&
                    emailHolder[i + 1].value.length >= 10)) {
                displayMessage("block", "Email Added!", 1, 0.5)
                setTimeout(removeMessage, 1000);
                break;
            } else {
                displayMessage("block", "Wrong email entered!", 1, 0.5);
                setTimeout(removeMessage, 1000);
                break;
            }
        }
    }

}

//function to hide alert box after time

function displayMessage(display, message, mailOpacity, bodyOpacity) {
    alertBox.style.display = display;
    alertMessage.innerHTML = message;
    alertBox.style.opacity = mailOpacity;
    document.body.style.opacity = bodyOpacity;
}


function removeMessage() {
    alertBox.style.display = "none";
    document.body.style.opacity = 1;
}
