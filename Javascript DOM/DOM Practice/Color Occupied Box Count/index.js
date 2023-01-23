let box = Array.from(document.getElementsByClassName("box"))
let heading = document.getElementsByTagName("h1")[0]
console.log(heading);
let n = 0

box.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("active")       
        if (item.classList.contains("active")){
            n++
            heading.innerText = `Color occupied box count: ${n}`
            console.log(heading.innerText);
            
        } else {
            n--
            heading.innerText = `Color occupied box count: ${n}`
        }        
        });
});




