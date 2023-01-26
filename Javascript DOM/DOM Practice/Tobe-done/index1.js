// const enter = document.getElementById("enter");
// const numbers = Array.from(document.querySelectorAll('[data-number]'))
// const operators = Array.from(document.querySelectorAll('[data-operator]'))
// const calculate = document.querySelector('[data-equal]')
// const clear = document.querySelector('[data-clear]')

// numbers.forEach(num => {
//     num.addEventListener("click", () => {
//         enter.value += num.innerText
//         console.log();
//     })
// })

// operators.forEach(operator => {
//     operator.addEventListener("click", () => {

//         if (enter.value === ""){
//             if (operator.innerText === "-"){
//                 enter.value += operator.innerText
//             } else{
//                 return
//             }
//         } else {           
//             if (enter.value.includes(".")){
//                 return
//             } else {
//                 enter.value += operator.innerText
//             }
//         }    
//     })
// })


// calculate.addEventListener("click", () => {
//     enter.value = eval(enter.value)
//     console.log(enter.value);
// });

// clear.addEventListener("click", () => {
//     enter.value = ""
// })

const enter = document.getElementById("enter")
const buttons = document.querySelectorAll("button");
const dotOperator = document.querySelector("[data-decimal]");


buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerText == "X") {
            e.target.innerText == "*"
            enter.value += e.target.innerText;
        } else if (e.target.innerText == "C") {
            enter.value = "";
        } else if (e.target.innerText == "=") {
            enter.value = eval(enter.value); 
        } else {
            enter.value += e.target.innerText;
        }
    })
})