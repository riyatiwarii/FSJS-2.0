// node Q25,26.js
// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2.
// Write a function which calculates bmi. BMI is used to broadly define different weight groups
// in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese
// based on the information given below.
//     - The same groups apply to both men and women.
//     - Underweight: BMI is less than 18.5
//     - Normal weight: BMI is 18.5 to 24.9
//     - Overweight: BMI is 25 to 29.9
//     - Obese: BMI is 30 or more

// let userHeight = prompt("Enter your height(in cm)")
// let userWeight = prompt("Enter your weight(in kg)")

// function calculateBMI (height, weight){
//     let bmi = (weight/(height*height/10000))
//     if (bmi < 18.5){
//         console.log("Your are underweight according to BMI Index.");
//     }else if(bmi >= 18.5 && bmi <= 24.9){
//         console.log("Your weight is normal according to BMI Index.");
//     }else if(bmi >= 25 && bmi <= 29.9){
//         console.log("Your are overweight according to BMI Index.");
//     }else if(bmi > 30){
//         console.log("Your are obese according to BMI Index.");
//     }
// }

// calculateBMI(userHeight, userWeight);

// Write a program to print the table of any number given by the user.
// The format of the output should be smiliar to the below example-
// 	If the number given by the user is 2 then the output should look like this-
// 	2 * 1 = 2
// 	2 * 2 = 4
// 	2 * 3 = 6 and so on till 2 * 10 = 20.

// let num = prompt("Enter the number for its multiplication table.")

// for (let i = 1; i <= 10; i++){
    
//     console.log(`${num} * ${i} = ${num*i}`)

// }


// Write a program to print all the prime number between 0 to 100 (0 and 100 included).

let checkPrimeNumber = true;
for (let i = 2; i <= 100; i++) {
    for (let factor = 2; factor < i-1; factor++) {
        if (i % factor == 0){
            isPrime = false;
            break;
        }
    }
    if (checkPrimeNumber){
        console.log(i)
    }
    checkPrimeNumber = true
}



















