// "this" is not a variable but a keyword which refers to an object.

// We can never change "this". Also, to which object "this" points,
// depends on where it has been used. 

// Let's see

// 1️⃣ "this" keyword used in an object method.

// let myName = {
//     firstName : "Riya",
//     lastName : "Tiwari",
//     showFullname : function () {
//         console.log(this); 👈 it will print myName object only.
//         console.log(`Fullname: ${this.firstName} ${this.lastName}`);
//     }
// }

// "this" is pointing to myName object.

// myName.showFullname();
// Fullname: Riya Tiwari

// Let's modify the code more.

// let myName = {
//     firstName : "Riya",
//     lastName : "Tiwari",
//     showFullname : function () {
//         console.log(this); 👈 it will print myName object.
//         console.log(`Fullname: ${this.firstName} ${this.lastName}`);
//     },
//     address : {
//         country : "India",
//         getAddress : function () {
//             console.log(this); 👈 it will print address object.
//             console.log(this.firstName); 👈 it will print undefined because 
//             we have called this getAddress on address object where we don't have 
//             any property as firstName in it. 
//             console.log(`Address: ${this.country}`);
//         }
//     }
// }

// myName.address.getAddress();
// Address: India

// 2️⃣ "this" keyword used in function declaration

// function printMessage(){
    // console.log(this); // "this" points to the global object
// }

// printMessage();

// 3️⃣ "this" keyword used in function with "STRICT" mode

// "use strict";
// function printMessage(){
    // console.log(this); // in strict mode, "this" points itself as undefined.
// }

// printMessage();
// undefined    

// 4️⃣ "this" keyword used in constructor function 

function CourseDetail (courseName, enrolledCount){
    this.courseName = courseName;
    this.enrolledCount = enrolledCount;
    this.showCourseStatus = function (){
        console.log(`Course Status: ${this.enrolledCount} enrollments in ${this.courseName}`);
        // JS is called to create a new empty object and assign it to "this" keyword.
        // So, "this" will refer to every instance created of an object constructor.
        // Just like here, it is "course1" instance to which "this" is referring to.
        // console.log(this);
    }
}

// let course1 = new CourseDetail ("JavaScript", 60)
// course1.showCourseStatus();



