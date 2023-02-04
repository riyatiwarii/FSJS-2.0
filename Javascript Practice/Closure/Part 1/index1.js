// for(var i = 0; i < 5; i++) {
//     console.log(i);
//     setTimeout(function() {
//        console.log(i);
//     },1000);
//   }
//   console.log('The loop is done!');

// callback function
// function multiply (x, y){
//     console.log(x*y);
// }

// setTimeout
// setTimeout(multiply(5, 3), 13000);
// not working.

// setTimeout(()=>{
//     console.log("Riya");
// }, 5000)

// var is function-scoped

// var person = "Riya";

// function callPerson () {
//     var person = "Javascript";
// }

// console.log(person);

// var block-scoped nhi hai.

// var person1 = "Riya";

// if (true){
//     var person1 = "Javascript"
//     console.log(person1);
// }

// console.log(person1);

// let is block-scoped

// let person1 = "Riya";

// if (true){
//     let person1 = "Javascript"
//     console.log(person1);
// }

// console.log(person1);

// setTimeout(()=>{
//     console.log("Riya");
// }, 5000)
// console.log("Hey!");

// setTimeout(function(){
//     console.log('Hey, why am I last?');
//   }, 0);
  
//   function sayHello(){
//     console.log('Hello');
//   }

//   function sayGoodbye(){
//     console.log('Goodbye');
//   }

//   sayHello();
//   sayGoodbye();

// for(var a = 1; a < 10; a++) {} 
// declared "inside" the loop
// console.log(a);
// prints "10" and is called "outside the loop"


// for(var i = 1; i < 6; i++) {
//    console.log('Loop Number' + i); // added this
//    setTimeout(()=>{
//       console.log(i);
//    },1000);
// }
// console.log('The loop is done!');

// function myFunction1() {
//     var a = 'Riya';
//     console.log(a);
//  }
//  function myFunction2() {
//     var a = 'JavaScript';
//     console.log(a);
//  }
//  function myFunction3() {
//     var a = 'Life';
//     console.log(a);
//  }
//  myFunction1()
//  myFunction2()
//  myFunction3()

// for(var i = 1; i < 6; i++) {
//     function timer(){ // create a unique function (scope) each time
//        var k = i; // save i to the variable k which
//        setTimeout(()=>{
//           console.log(k);
//        },1000);
//     }
//     timer();
//  }

// function variableDemo() {
//     var i = 'Hello World!';
//     for(let i = 1; i < 3; i++) {
//        console.log(i); // 1, 2, 3
//     }
//     console.log(i); // "Hello World!" 
//     // the for-loop value of i is hidden outside of the loop with let
//  }
 
//  variableDemo();
//  console.log(i); //Error, can't access either value of i

// function loopDone() { // we will call this below
//    console.log("The loop is done.");
//  }
                
//  for(let i = 1; i < 6; i++) {
//     setTimeout(()=>{
//        console.log(i);
//     },1000);
//  }
    
//  setTimeout(loopDone, 1001);