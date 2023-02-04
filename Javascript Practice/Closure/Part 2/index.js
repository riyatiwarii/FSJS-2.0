const counterBtn = document.getElementsByTagName("button")[0]
const zeroBtn = document.getElementsByTagName("button")[1]

// let counter = 0

function incrementCounter () {
    let counter = 0
    function increment () {
        counter++
        console.log(counter);
        counterBtn.innerText = counter
    }
    return increment
}

const retainCount = incrementCounter()
counter = 10
counterBtn.addEventListener("click", retainCount)

// zeroBtn.addEventListener("click", backToZero)

// function backToZero() {
//     counter = 0
//     counterBtn.innerText = counter
// }

// function buttonCounter () {
//     let counter = 0
//     function incrementCounter () {
//         counter++
//         counterBtn.innerText = counter
//         console.log(counter);
//     }
//     function restartCounter() {
//         counter = 0
//         counterBtn.innerText = counter
//         console.log(counter);
//     }
//     return {
//         incrementCounter: incrementCounter,
//         restartCounter: restartCounter,
//     };
// }

// const a = buttonCounter()
// a.incrementCounter();
// a.incrementCounter();
// a.incrementCounter();
// console.log(a);
// a.restartCounter();

// counterBtn.addEventListener("click", a.incrementCounter)
// zeroBtn.addEventListener("click", a.restartCounter)
