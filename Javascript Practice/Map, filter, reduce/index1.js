const arr = [1, 2, 3, 4, 5, 6]
// 21

arr1 = arr.reduce((acc, curr) => {
    acc = acc + curr
    return acc
}, 0)

// console.log(arr1);

function maxNum (acc, curr) {
    if (curr > acc){
        acc = curr
    }
    return acc
}

Array.prototype.myReduce = function(callback, initial){
    for (let i=0; i < this.length; i++){
        initial = callback(initial, this[i]) 
    }
    return initial
}

// console.log(arr.myReduce(maxNum, 0));

const ourNames = [
    {name : "Riya", love: "JavaScript", number : 727},
    {name : "Preeti", love: "Maths", number: 511},
    {name : "Ambika", love: "Alex", number: 899}
]

// Ambika: 899

let ambika = ourNames.myReduce((acc, curr) => {
    if(acc.number > curr.number){
        acc = curr
    } else {
        acc = curr
    }
    return acc.name + " : " + acc.number
}, {})

console.log(ambika);