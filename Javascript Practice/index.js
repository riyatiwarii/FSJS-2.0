const nums = [2, 3, 4, 5, 6];
// Numberlist element*10
const multiply = nums.map(element => element*10);
console.log(multiply);

const multiplyCheck =  function (num1, num2){
    if (num1*num2 == 70){
        return true
    }
}

const myname = "Riya";
console.log(myname.includes("y"))

console.log(multiplyCheck(7, 10));

var x = 10;

function riyaSays(){
	console.log("Riya says Hello.");
  	riyaExits();
    console.log("Riya exited.")
}

function riyaExits(){
  console.log("Riya exits."); 
} 

riyaSays();