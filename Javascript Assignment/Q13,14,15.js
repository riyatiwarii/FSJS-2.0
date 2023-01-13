// Get user input using prompt(“Enter your age:”). If user is 18 or older,
// give feedback:'You are old enough to drive' but if not 18 give another feedback
// stating to wait for the number of years he needs to turn 18.

// let userInput = prompt("Enter your age to check your driving eligibility.")

// if (userInput < 18){
//     x = 18 - userInput;
//     console.log(`Hey! You're not old enough to drive. Wait for ${x} years.`)
// }else{
//     console.log("You're old enough to drive. Celebrate it!")
// }

// Even numbers are divisible by 2 and the remainder is zero. How do you check,
// if a number is even or not using JavaScript? Create a program which checks that
// the given number is even or odd.

// let userNum = prompt("Enter your number to check if it is even or odd number.")

// if (userNum%2 === 0){
//     console.log('It is an even number.')
// }else{
//     console.log('It is an odd number.')
// }

// Write a program which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-79, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, E

// let userScore = prompt("Enter your score here to check the grade.")

// if (userScore >= 80){
//     if (userScore > 100){
//         console.log(`${userScore}, score above 100 is invalid.`)
//     }
//     else{
//         console.log(`Your grade on ${userScore} is A`)
//     } 
// } else if (userScore >= 70 && userScore <= 79){
//     console.log(`Your grade on ${userScore} is B`)
// } else if (userScore >= 60 && userScore <= 69){
//     console.log(`Your grade on ${userScore} is C`)
// } else if (userScore >= 50 && userScore <= 59){
//     console.log(`Your grade on ${userScore} is D`)
// } else if (userScore >= 0 && userScore <= 49){
//     console.log(`Your grade on ${userScore} is E`)
// }