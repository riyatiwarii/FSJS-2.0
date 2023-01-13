// A program to check that the number given by the user is a prime number or not.

var userInputNumber = parseInt(prompt("Enter the number to check it is a prime number or not."))
var numberPrime = true

function checkPrimeNumber(userInputNumber){
    if (userInputNumber < 2){
        console.log("Please enter the number greater than 1");
    } else if (userInputNumber === 2){
        console.log(`${userInputNumber} is a prime number`);
    } else {
        for ( let factor = 2; factor <= Math.ceil(Math.sqrt(userInputNumber)); factor++ ){
            if (userInputNumber % factor == 0){
                numberPrime = false;
                break
            } 
        }
        if (numberPrime){
            console.log(`${userInputNumber} is a prime number.`);
        } else {
            console.log(`${userInputNumber} is not a prime number.`);
        }
    }
}

checkPrimeNumber(userInputNumber);

//  A program to create two array "even" and "odd" having even and odd number
//  between the 0 to 100 (0 and 100 included).

// var evenArray = [];
// for (var i = 1; i <= 100; i++) {
//     if(i % 2 == 0){
//         evenArray.push(i)
//     }
// }
// console.log(evenArray)

// var oddArray = [];
// for (var i = 1; i <= 100; i++) {
//     if(i % 2 != 0){
//         oddArray.push(i)
//     }
// }
// console.log(oddArray)

