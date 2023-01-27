const enter = document.getElementById("enter");
const numbers = Array.from(document.querySelectorAll('[data-number]'))
const operators = Array.from(document.querySelectorAll('[data-operator]'))
const calculate = document.querySelector('[data-equal]')
const clear = document.querySelector('[data-clear]')
// const decimal = document.querySelector('[data-decimal]')

// let isDecimal = false
// decimal.addEventListener("click", () => {
//     enter.value = decimal.innerText
// })

numbers.forEach(num => {
    num.addEventListener("click", () => {
        enter.value += num.innerText
    })
})

operators.forEach(operator => {
    operator.addEventListener("click", () => {

        if (enter.value === "") {
            if (operator.innerText === "-" | operator.innerText === "." ) {
                enter.value += operator.innerText
            } else {
                return
            }
        } else {
                 if(operator.innerText === "x"){
                    enter.value += "*"
                    operator.innerText = "x"
                    return
                 }
                enter.value += operator.innerText
        }    
    })
})

Window.onerror = function(){
    enter.value = ""
    console.clear();
}

calculate.addEventListener("click", displayResult)

function displayResult () {
    if (enter.value == ""){
        enter.value = ""
        enter.value += operator.innerText
    }
    try {
        enter.value = eval(enter.value)
    } catch (e) {
        enter.value = "Invalid value"
    }
    enter.value += operator.innerText
}

clear.addEventListener("click", () => {
    enter.value = ""
})


