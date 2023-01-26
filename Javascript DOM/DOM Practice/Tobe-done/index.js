let enter = document.getElementById("enter");
let numbers = Array.from(document.querySelectorAll('[data-number]'))
let operators = Array.from(document.querySelectorAll('[data-operator]'))
let calculate = document.querySelectorAll('[data-equal]')[0]
let clear = document.querySelectorAll('[data-clear]')[0]

numbers.forEach(num => {
    num.addEventListener("click", () => {
        enter.value += num.innerText
        console.log();
    })
})

operators.forEach(operator => {
    operator.addEventListener("click", () => {

        if (enter.value === ""){
            if (operator.innerText === "-" | operator.innerText === "(" ){
                enter.value += operator.innerText
            } else{
                return
            }
        } else {           
            if (enter.value.includes(".")){
                return
            } else {
                enter.value += operator.innerText
            }
        }    
    })
})


calculate.addEventListener("click", () => {
    enter.value = eval(enter.value)
    console.log(enter.value);
});

clear.addEventListener("click", () => {
    enter.value = ""
})






