// While loop
// let count = 1;

// while (count <= 10){
//     console.log(`Count: ${count}`);
//     count++
// }

// const number = 5;
// let times = 1;

// while (times <= 10){
//     console.log(`${number} x ${times} = ${number*times}`);
//     times++
// }

// Do while loop
// let count = 11;

// do{
//     console.log(count);
//     count++
// }while (count <= 10)

// For loop

// let number = 10;

// for (let times = 1; times <= 10; times++){
//     console.log(`${number} x ${times} = ${number*times}`)
// }

// let number = 5

// for (let times = 10; times >= 0; times--){
//     console.log(`${number} x ${times} = ${number*times}`)
// }

// Arrays

const arr1 = [1, 2, 3]
arr1[90] = 777;
console.log(arr1.length);
// console.log(arr1[70]);

// interview question length.

    // const arr1 = [10, 20, 30, 40]
    // const arr2 = []
    // const num = parseInt(prompt("Enter the number to check if it exists in array data."))
    //     if (arr1.includes(num)){
    //         console.log("Yes, it exists.");
    //     } else {  
    //         arr2.push(num) 
    //         console.log(`Num created in another array: ${arr2}`);
    //     }

// const isEven = (number) => {
//     return number%2 === 0;
// }   

// arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
// arr2 = arr1.filter(isEven)
// console.log(arr2);

// arr2 = arr1.filter((number) => {
//         return number%2 === 0;
//     }   )
//     console.log(arr2);

// arr2 = arr1.filter(number => number%2 === 0);
//     console.log(arr2);

// arr2 = []
// arr1.forEach( (number) => {
//      if (number%2 === 0){
//         arr2.push(number)
//      }
// });
// console.log(arr2);
        
// arr1 = [1, 2, 3, 4, 5, 6, 7, 8]
// arr2 = []
// for (let i = 1; i <= arr1.length; i++){
//     if (i % 2 === 0){
//         arr2.push(i)
//     }
// }
// console.log(arr2);
    
// arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
// arr2 = arr1.map((number) => {
//         return number*2
//     }   )
//     console.log(arr2);

// arr2 = arr1.filter(num => num % 2 == 0).map(num => num * 2);
// console.log(arr2);

// console.log(arr2.find(twelve => twelve == 12));
// console.log(arr2.findIndex(twelve => twelve == 12));

function Brainstormers (firstName, lastName, number){
    this.firstName = firstName;
    this.lastName = lastName;
    this.number = number;
}

let ourNames = [
    new Brainstormers("Preeti", "Tiwari", 779),
    new Brainstormers("Neha", "Tiwari", 777),
    new Brainstormers("Riya", "Tiwari", 727),
]

let filterItem = ourNames.filter(num => num.number < 730);
// console.log(filterItem);

let mapItems = ourNames.map(
    target => {
        return new Brainstormers(
            target.firstName.toUpperCase(),
            target.lastName.toUpperCase(),
            target.number
        )
    }
)

// console.log(mapItems);

// const btn = document.getElementById("btn")
// btn.addEventListener("click", checkArray)
// console.log(btn);

// const arr2 = [];
// function checkArray () {
//     const input = parseInt(prompt("Enter the number"));

//     const arr1 = [1, 2, 3, 4, 5];    

//     if (arr1.includes(input)){
//         console.log("Number exists");
//     } else {
//         arr2.push(input);
//         console.log(arr2);
//     }
// }

// const myname = ["R","I","Y","A"]
// console.log(myname.slice(0, 2 ));


// let count = 5;
// while(count <= 10){
//     console.log(count);
//     count++
// }

