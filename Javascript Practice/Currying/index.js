// Question 1 - sum(2)(6)(1)

function sum (a){
    return function (b){
        return function (c){
            let sumValue = a + b + c
            return sumValue
        }
    }
}

console.log(sum(2)(6)(1));