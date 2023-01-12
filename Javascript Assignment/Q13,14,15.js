// Get user input using prompt(“Enter your age:”). If user is 18 or older,
// give feedback:'You are old enough to drive' but if not 18 give another feedback
// stating to wait for the number of years he needs to turn 18.

let userInput = prompt("Enter your age to check your driving eligibility.")

if (userInput < 18){
    console.log("Hey! You're not old enough to drive.")
}else{
    console.log("You're old enough to drive. Celebrate it!")
}