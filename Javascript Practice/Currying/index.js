// Closures are functions that remember the environment in which they have been created.
// It is a feature of JavaScript.

// Currying is the process of transforming a function, which takes in multiple arguments,
// in one that takes a single parameter and returns another function.

// Question 1 - sum(2)(6)(1)

// function sum (a){
//     return function (b){
//         return function (c){
//             let sumValue = a + b + c
//             return sumValue
//         }
//     }
// }

// console.log(sum(2)(6)(1));

// Question 2 - 
// evaluate("sum")(4)(2) => 6
// evaluate("multiply")(4)(2) => 8
// evaluate("divide")(4)(2) => 2
// evaluate("subtract")(4)(2) => 2

// function evaluate(operation){
//     return function (num1){
//         return function (num2){
//             if (operation === "sum"){
//                 console.log(num1 + num2);
//             } else if (operation === "multiply"){
//                 console.log(num1 * num2);
//             } else if (operation === "divide"){
//                 console.log(num1 / num2);
//             } else if (operation === "subtract"){
//                 console.log(num1 - num2);
//             } else {
//                 return "Invalid Operation Entered."
//             }
//         }
//     }
// }

// evaluate("sum")(4)(2)
// evaluate("multiply")(4)(2)
// evaluate("divide")(4)(2) 
// evaluate("subtract")(4)(2) 

// Question 3 -
// Infinite Currying -> sum(1)(2)(3)....(n)

// Cars24 interview- question asked to implement console.log(sum(5)(2)(4)(5)())

// function sum (a){
//     return function (b) {
//         if (b) {
//             return sum(a + b);
//         }
//         return a;
//     }
// }

// console.log(sum(5)(2)(4)(5)())

// Question 4 - 
// Currying vs Partial Application

// Partial Application

// function sum (a){
//     return function (b, c){
//         return a + b + c
//     }
// }

// console.log(sum(2)(5, 7));

// Currying

// function sum (a){
//     return function (b){
//         return function (c){
//             let sumValue = a + b + c
//             return sumValue
//         }
//     }
// }

// Question 5 -
// Manipulating DOM using Currying

// function updateElementText(id){
//     return function (content){
//         document.getElementById(id).innerText = content
//     }
// }

// let updateHeader = updateElementText("heading")

// updateHeader("Hello JS ❤️")
// updateHeader("Let us fall in love with lovely JavaScript.❤️")

// Question 6-
// curry() Implementation
// Converts f(a, b, c) => f(a)(b)(c)

function sum (a, b, c){
    return a + b + c
}

// console.log(sum(1)(2)(3));

// function curry (fn){
//     return function curried (...args) {

//         if (fn.length !== args.length){
//             return curried.bind(null, ...args)
//         } else {
//             return fn(...args);
//         }
    
//     };
// }

// function curry (fn) {
//     return function curried(...args){
//         // console.log(fn.length, args.length);
//         if(args.length !== fn.length){
//             return curried.bind(null, ...args)
//         } else {
//             return fn(...args);
//         }
//     }
// }

// const totalNum=(x,y,z) => {
//     return x+y+z 
// } 

// const curriedTotal = curry(totalNum);
// console.log(curriedTotal(10)(20)(30));
