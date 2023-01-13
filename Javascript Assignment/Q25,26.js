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

let userHeight = prompt("Enter your height(in cm)")
let userWeight = prompt("Enter your weight(in kg)")

function calculateBMI (height, weight){
    let bmi = (weight/(height*height/10000))
    if (bmi < 18.5){
        console.log("Your are underweight according to BMI Index.");
    }else if(bmi >= 18.5 && bmi <= 24.9){
        console.log("Your weight is normal according to BMI Index.");
    }else if(bmi >= 25 && bmi <= 29.9){
        console.log("Your are overweight according to BMI Index.");
    }else if(bmi > 30){
        console.log("Your are obese according to BMI Index.");
    }
}

calculateBMI(userHeight, userWeight);













