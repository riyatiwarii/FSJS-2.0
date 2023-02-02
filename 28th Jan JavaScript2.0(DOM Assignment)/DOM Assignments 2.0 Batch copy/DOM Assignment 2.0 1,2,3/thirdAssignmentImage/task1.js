// const enterName = document.getElementsByClassName("enterName")[0];
// enterName.placeholder = "FSJS 2.0"
// const enterMail = document.getElementsByClassName("enterMail")[0];
// enterMail.placeholder = "fsjs@ineuron.ai"
// const enterMessage = document.getElementsByClassName("enterMessage")[0];
// enterMessage.placeholder = "Hello World"
// const userName = document.getElementsByClassName("userName")[0];
// userName.placeholder = "FSJS 2.0"
// const userEmail = document.getElementsByClassName("userEmail")[0];
// userEmail.placeholder = "fsjs@ineuron.ai"
// const userMessage = document.getElementsByClassName("userMessage")[0];
// userMessage.placeholder = "Hello World"

function doTask (target, text) {
    document.getElementsByClassName(target)[0].placeholder = text
}
doTask("enterName", "FSJS 2.0")
doTask("enterMail", "fsjs@ineuron.ai")
doTask("enterMessage", "Hello World")
doTask("userName", "FSJS 2.0")
doTask("userEmail", "fsjs@ineuron.ai")
doTask("userMessage", "Hello World")
