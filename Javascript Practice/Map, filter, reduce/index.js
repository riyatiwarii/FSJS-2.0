const users = [
    {firstName: 'Riya', lastName: 'Tiwari', age: 22},
    {firstName: 'Elon', lastName: 'Musk', age: 50},
    {firstName: 'Donald', lastName: 'Trump', age: 75},
    {firstName: 'Ambika', lastName: 'Choudhary', age: 22}
]

// { 22 : 2, 75 : 1, 50 : 1}

const agePair = users.reduce( function(acc, curr) {
    if(acc[curr.age]){
        acc[curr.age] =+ acc[curr.age] 
    } else {
        acc[curr.age] = 1
    }
    return acc
}, {} )
// console.log(agePair);

// const first = users.filter( x => x.age < 30).map(x => x.firstName);
// console.log(first);

// [ 'Riya', 'Ambika' ]

// const firstName = users.reduce( function (acc, curr){
//     if (curr.age === 22){
//         acc.push(curr.firstName)
//     }
//     return acc 
// }, [] )
// console.log(firstName)

const names = ['Savinder', 'Bharat', 'Mayur', 'Atul', 'Laxmi', 'Riya']

// Congratulations Savinder Bharat Mayur Atul Laxmi Riya!

const output = names.reduce( function (acc, curr) {  
    acc = acc + " " + curr 
    return acc
}, "Congratulations") + "!"

// console.log(output);

const arr = [175, 50, 25];
// 100

const result = arr.reduce(function (acc, curr){
    acc = acc - curr
    return acc
})

// console.log(result);

const text = "my name is riya tiwari."
// My Name Is Riya Tiwari.

const titleCase = text.split(" ").reduce( function (acc, curr) {
    acc = acc + curr[0].toUpperCase() + curr.slice(1).toLowerCase() + " ";
    return acc
}, "" )

// console.log(titleCase);

const text1 = "my name            is riya          tiwari."
// "my name is riya tiwari."

const removeSpace = text1.split(" ").reduce( function (acc, curr) {
    if (curr) {
        acc = acc + curr + " ";
    }
    return acc;
}, "" )

// console.log(removeSpace);

// Creating my own Polyfill for filter

const arr1 = [1, 2, 3, 4, 5, 6]

function greaterThan2 (num) {
    if (num > 2){
        return num
    } 
}

Array.prototype.myFilter = function (callback) {
    const arr = [];
    for (let i=0; i < this.length; i++){
        if(callback(this[i])){
            arr.push(callback(this[i]))
        }
    }
    return arr
};

// console.log(arr1.myFilter(greaterThan2));

// Creating my own Polyfill for Reduce

const ourNames = [
    {name : "Riya", love: "JavaScript", number : "727"},
    {name : "Preeti", love: "Maths", number: "511"},
    {name : "Ambika", love: "Alex", number: "899"}
]

// {Ambika: 899}

function nameMaxNumber (acc, curr) {
    if(curr.number > acc){
        acc = curr.number
    }
    return acc
}

Array.prototype.myReduce = function (callback, initial) {
    let acc = initial
    for (let i=0; i < this.length; i++){
        callback(this[i], acc)
    }
    return acc
}

// console.log(ourNames.myReduce(nameMaxNumber, {}));

