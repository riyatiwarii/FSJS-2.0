const input = document.getElementById("input")
const addInput = document.getElementById("btn")
const liList = document.getElementById("list")
const deleteBtn = Array.from(document.getElementsByClassName("delete"))

let data = localStorage.getItem("data")
    if (data === null){
        datastore = []
    } else {
        datastore = JSON.parse(data)
    }

addInput.addEventListener("click", () => {
    if(input.value){
        datastore.push(input.value)
        localStorage.setItem("data", JSON.stringify(datastore))
        appendChild(input.value)
        input.value = ""
    }
})

function appendChild(i){
    const liTag = document.createElement("li")
        liTag.innerHTML = `${i}  <button class="delete">delete</button>`
        liList.appendChild(liTag)
        deleteChild();
}

storeData = JSON.parse(localStorage.getItem("data"));
    storeData.forEach(item => {
        appendChild(item)
    })

function deleteChild(){
    const grabDelete = Array.from(document.getElementsByClassName("delete"))
    grabDelete.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            btn.parentElement.remove()
            console.log(datastore);
            datastore.splice(index, 1)
            localStorage.setItem("data", JSON.stringify(datastore))
         
        })
    })
}

deleteChild()