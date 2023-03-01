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

// let printFullName = function () {
//     console.log(`Full name: ${this.firstName} ${this.lastName}`);
// }

// let person2 = {
//     firstName : "Preeti",
//     lastName : "Tiwari"
// }

// printFullName.apply(person)
// printFullName.apply(person2)

// Apply completed

let person = {
    firstName : "Riya",
    lastName : "Tiwari",
}

let printFullName = function () {
    console.log(`Full name: ${this.firstName} ${this.lastName}`);
}

let person2 = {
    firstName : "Preeti",
    lastName : "Tiwari"
}

let printPersonName = printFullName.bind(person)

let printPerson2Name = printFullName.bind(person2)

printPersonName();
printPerson2Name();

// Bind completed