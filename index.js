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


//sign in button onClick event


let signIn = document.getElementById("sign-in");

signIn.onclick = function () {
    alert("To sign in\nPut your eamil in  one of the boxes");
}





// input email event

let emailButton = document.querySelectorAll(".sumbit-email-button");
let emailHolder = document.querySelectorAll(".email-input");


for (let i = 0; i < emailButton.length; i++) {
    emailButton[i].addEventListener("click", SubmitButtonEvent);
}

function SubmitButtonEvent() {

    for (let i = 0; i < emailHolder.length; i++) {
        if (emailHolder[i].value == "" && emailHolder[i + 1].value == "") {
            alert("Please input your email to submit!");
            break;
        } else {
            if ((emailHolder[i].value.includes("@gmail.com") &&
                emailHolder[i].value.length >= 10) || (emailHolder[i + 1].value.includes("@gmail.com") &&
                    emailHolder[i + 1].value.length >= 10)) {
                alert("Email succesfully added!")
                break;
            } else {
                alert("Please enter correct email address")
                break;
            }
        }
    }

}