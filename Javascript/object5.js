// let myname = 'Riya';
// String.prototype.upper = function (){
//     console.log(`It is changed to uppercase: ${this.toUpperCase()}`)
// }

// let tiwari = 'tiwari'
// myname.upper();
// tiwari.upper();

//let's create an array
// const candies = [ 'orange', 'tamarind', 'guava', 'cranberry'];

// An Array is also a special type of object which means that we can create instances of an Array just like below.

// const candies = new Array ('orange', 'tamarind', 'guava', 'cranberry')

// console.log(typeof 'Riya');

// console.log(typeof 77);

// console.log(typeof true);

// console.log(typeof undeclaredVariable);

// console.log(typeof null);

// console.log(typeof function () {});

// console.log(typeof Symbol('symbol in JS'));

String.prototype.firstFour= function(){
    console.log(`First four letters only: ${this.slice(0, 5)}`);
}

let myname = 'Riya Tiwari'
myname.firstFour();

firstFour.__proto__ == String.prototype;