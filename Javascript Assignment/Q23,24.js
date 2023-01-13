// A program to check that the number given by the user is a prime number or not.

// const userInputNumber = prompt("Please enter number to check it it is prime number or not.")

// if (userInputNumber % 2 == 0){
//     if (userInputNumber == 2){
//         console.log("It is a prime number.")
//     }
//     else{
//         console.log("It is not a prime number.")
//     }
// } else{
//     if (userInputNumber < 2){
//         console.log("It is not a prime number.")
//     }
//     else{
//         console.log("It is a prime number")
//     }
// }

//  A program to create two array "even" and "odd" having even and odd number
//  between the 0 to 100 (0 and 100 included).

var evenArray = [];
for (var i = 1; i <= 100; i++) {
    if(i % 2 == 0){
        evenArray.push(i)
    }
}
console.log(evenArray)

var oddArray = [];
for (var i = 1; i <= 100; i++) {
    if(i % 2 != 0){
        oddArray.push(i)
    }
}
console.log(oddArray)

