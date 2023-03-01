// let brainStormers = {
//     namesList : 'Riya',
//     count : this,
//     printInfo : function () {
//         console.log(`Names: ${this.namesList} and the count: ${this.count}, ${this}`);
//     }
// }

// console.log(brainStormers.count);
// brainStormers.printInfo();

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

let person = {
    firstName : "Riya",
    lastName : "Tiwari",
}

let printFullName = function (hometown, state) {
    console.log(`Full name: ${this.firstName} ${this.lastName}, ${hometown}, ${state}`);
}

let printPerson = printFullName.bind(person, "Jaipur");
console.log(printPerson);
printPerson("Raj");

Function.prototype.loveBinding = function (...args) {
    let main = this
    let params = args.slice(1)
    return function(...args2) {
        main.apply(args[0], [...params, ...args2])
    }
}

let printPerson1 = printFullName.loveBinding(person, "Jaipur")
printPerson1("Raj");