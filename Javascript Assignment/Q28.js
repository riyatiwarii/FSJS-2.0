// Write a program to print the given patterns using the loops-
// 	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
// 	   *
// 	   **
// 	   ***
	
// 	b. Print a square pattern, if the input is 3 then the output should be similar to the given output
// 	   ***
// 	   ***
// 	   ***

// 	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
// 	     *
// 	    ***
//     *****

// part a 

// function print1(num){
//     for (let i = 1; i <= num; i++) {
//         console.log("*".repeat(i));
//     }
// }

// print1(3);

// part b

// function print1(num){
//     for (let i = 1; i <= num; i++) {
//         console.log("*".repeat(num));
//     }
// }

// print1(3);

// part c

function print2(num) {
    for(let i=1; i<= num; i++){ 
      console.log(' '.repeat(num-i) , '*'. repeat(i*2 -1) , ' '.repeat(num-i));  
    } 
  } 
  print2(3);