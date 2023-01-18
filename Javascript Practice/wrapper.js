// let a = undefined;

// if (typeof a === 'undefined') {
//     console.log("a is declared");
//   } else {
//     console.log("a is declared and initialized");
//   }

// if (a === undefined) {
//     console.log("a is declared");
//   } else {
//     console.log("a is declared and initialized");
//   }


var myname = "Riya";

// console.log(mySurname);

function myScope () {
    var mySurname = "Tiwari";
    return mySurname
}
// myScope();
console.log(myScope());
console.log(mySurname);


