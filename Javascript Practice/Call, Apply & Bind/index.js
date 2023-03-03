// let person = {
//     firstName : "Riya",
//     lastName : "Tiwari",
//     printFullName : function () {
//         console.log(`Full name: ${this.firstName} ${this.lastName}`);
//     }
// }

// person.printFullName();

// let person2 = {
//     firstName : "Preeti",
//     lastName : "Tiwari"
// }

// person.printFullName.call(person2)

// Call completed

// let person = {
//     firstName : "Riya",
//     lastName : "Tiwari",
// }

// let printFullName = function (hometown, state) {
//     console.log(`Full name: ${this.firstName} ${this.lastName}, ${hometown}, ${state}`);
// }

// let person2 = {
//     firstName : "Preeti",
//     lastName : "Tiwari"
// }

// printFullName.call(person, "Jaipur", "Raj")
// printFullName.call(person2, "Jaipur", "Raj")

// printFullName.apply(person, ["Jaipur", "Raj"])
// printFullName.apply(person2, ["Jaipur", "Raj"])

// Apply completed

// let person = {
//     firstName : "Riya",
//     lastName : "Tiwari",
// }

// let printFullName = function (hometown, state) {
//     console.log(`Full name: ${this.firstName} ${this.lastName}, ${hometown}, ${state}`);
// }

// let person2 = {
//     firstName : "Preeti",
//     lastName : "Tiwari"
// }

// let printPerson = printFullName.bind(person, "Jaipur", "Raj")
// let printPerson2 = printFullName.bind(person2, "Jaipur", "Raj")
// printPerson();
// printPerson2();

// Bind completed

// Creating own polyfill for bind method.

// let person = {
//     firstName : "Riya",
//     lastName : "Tiwari",
// }

// let printFullName = function (hometown, state) {
//     console.log(`Full name: ${this.firstName} ${this.lastName}, ${hometown}, ${state}`);
// }

// let printPerson = printFullName.bind(person, "Jaipur");
// console.log(printPerson);
// printPerson("Raj");

// Function.prototype.bindLove = function (person, ...args) {
//     let func = this
//     return function (...args2) {
//         func.apply(person, [...args, ...args2])
//     }
// }

// let printPerson1 = printFullName.bindLove(person,"Jaipur", "India");
// console.log(printPerson1);
// printPerson1();

// Function.prototype.loveBinding = function (...args) {
//     let main = this
//     let params = args.slice(1)
//     return function(...args2) {
//         main.apply(args[0], [...params, ...args2])
//     }
// }

// let printPerson1 = printFullName.loveBinding(person, "Jaipur", "India")
// printPerson1()

// const obj = {
//     myName : "Riya",
//     firstLove : "JavaScript",
//     secondLove : "React and Parcel",
//     happyPlace : "Telling dad jokes",
//     printFirstLove : function () {
//         console.log(`Riya's first love: ${this.firstLove}`);
//     },
//     printSecondLove : function () {
//         console.log(`Her second love: ${this.secondLove}`);
//     },
//     printHerLove : function () {
//         this.printFirstLove();
//         this.printSecondLove();
//         function printHappyPlace () {
//             console.log(`Her happy place lies in ${this.happyPlace}`);           
//         }
//         printHappyPlace();
//         const bindLove = printHappyPlace.bind(this);
//         bindLove();
//     }

// }

// obj.printHerLove();

let person = {
    firstName : "Riya",
    lastName : "Tiwari"
}

let printFullName = function () {
    console.log(`Full name: ${this.firstName} ${this.lastName}`);
}

printFullName.call(person)

Function.prototype.myCall = function (obj) {
    
}

printFullName.myCall(person)

