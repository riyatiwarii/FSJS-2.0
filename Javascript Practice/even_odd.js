var even = [ ];
var odd = [ ];

for(let i=0; i<=100; i++){

    if (i % 2 == 0) {
        even.push(i);
    } 
    else {
        odd.push(i);
    }

}

console.log("This is an even array ",even);
console.log("This is an odd array" , odd);



// node even_odd.js