Stack Overflow
// Stack overflow happens when we call functions nested inside each, other over and over again.
// If we just keep adding functions to the stack without popping them off,
// we will have a stack overflow.
// We can create a stack overflow very easily with recursion
// function sayHello(){
//   console.log("Riya says Hello");
//   sayHello();
// }
// sayHello();

function doLoop(){
  for (let i = 0; i < 5; i++){
    console.log("Loop is executing");
  }
  console.log("Loop is stopped.");
}








