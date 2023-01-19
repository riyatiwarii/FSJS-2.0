// 5. Difference between var and let keyword in javascript.
// Some differences are 

// From the very beginning, the 'var' keyword was used in JavaScript programming whereas the keyword 'let' was just added in 2015.
// The keyword 'Var' has a function scope. Anywhere in the function, the variable specified using var is accessible but in ‘let’ the scope of a variable declared with the 'let' keyword is limited to the block in which it is declared. Let's start with a Block Scope.
// In ECMAScript 2015, let and const are hoisted but not initialized. Referencing the variable in the block before the variable declaration results in a ReferenceError because the variable is in a "temporal dead zone" from the start of the block until the declaration is processed

if( x && y ){ 
    console.log("Code runs" ); // This block runs because x && y returns "Hello" (Truthy)
  }   
          
  if( x || z ){
    console.log("Code runs");  // This block runs because x || y returns 220(Truthy)
  }



