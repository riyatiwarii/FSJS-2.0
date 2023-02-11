const taskTitle = document.getElementById("input-title")
const taskDescription = document.getElementById("input-description")
const addBtn = document.getElementById("add-btn")
const incompleteTasks = document.getElementById("incomplete")
const searchInput = document.querySelector(".searchTerm")
const searchButton = document.querySelector(".searchButton")


let data = localStorage.getItem("data")
// console.log(data);

if (data === null){
    store = []
} else {
    store = JSON.parse(data)
}

addBtn.addEventListener("click", () => {
    if (taskTitle.value){
        object = {
            title : taskTitle.value,
            description : taskDescription.value
        }
        store.push(object)
        console.log(store);
        localStorage.setItem("data", JSON.stringify(store))
        addToDo(taskTitle.value, taskDescription.value)
        toggleItem()
        deleteToDo()
    }
    taskTitle.value = ""
    taskDescription.value = ""
    
})

function addToDo(a, b){
        incompleteTasks.innerHTML += `<div>
    <button class="accordion" id="incomplete">
        <i class="fa fa-chevron-down"></i>
        <label>${a}</label>
        <div class="icons">
        <input type="checkbox">
        <i class="fas fa-pen"></i>
        <i class="fas fa-trash"></i>
        </div>
   </button>
   <p class="panel">${b}</p>
</div>`
;
// toggleItem();
editItem();
saveItem();
}

storeToDo = JSON.parse(data)
storeToDo.forEach((item) => {
    // console.log(item);
    addToDo(item.title, item.description)
})

function deleteToDo(){
    const deleteBtns = Array.from(document.querySelectorAll(".fa-trash"))
    deleteBtns.forEach((btn, index) => {
        // console.log(btn, index);
        btn.addEventListener("click", () => {
            btn.parentElement.parentElement.parentElement.remove();
            console.log(btn.parentElement.parentElement);
            store.splice(index, 1)
            localStorage.setItem("data", JSON.stringify(store))
        })

    })
}

deleteToDo();

function toggleItem () {
    const downArrows = Array.from(document.querySelectorAll('.fa-chevron-down'))
    // console.log(downArrows);
    downArrows.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            console.log(btn, index);
            btn.classList.toggle("fa-chevron-up")
            if (btn.classList.contains("fa-chevron-up")){
                btn.parentElement.nextElementSibling.style.display = "block"
            } else {
                btn.parentElement.nextElementSibling.style.display = "none"
            } 
        editItem()
        saveItem()
                
        })
    })
}

toggleItem()

function editItem() {
    const editBtns = Array.from(document.querySelectorAll(".fa-pen"))
    // console.log(editBtns);
    editBtns.forEach((btn, index) => {
        // console.log(btn, index);
        btn.addEventListener("click", () => {
            title = btn.parentElement.parentElement.querySelector('label').innerText
            description = btn.parentElement.parentElement.parentElement.querySelector('p').innerText
            btn.parentElement.parentElement.parentElement.innerHTML = `<div class="editmode">
            <button class="accordion">
                <i class="fa fa-chevron-down"></i>
                <input type="text" value="${title}">
                <div class="icons">
                <input type="checkbox">
                <i class="fas fa-save"></i>
                <i class="fas fa-trash"></i>
                </div>
           </button>
           <textarea class="panel" type="text" rows="3">${description}</textarea>
        </div>`
        toggleItem();
        saveItem(title, description);
        deleteToDo()
        })
    })
}

// editItem();

function saveItem (a, b) {
    const saveBtns = Array.from(document.querySelectorAll(".fa-save"))
    saveBtns.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            // console.log(store);
            // console.log(index, store[index].title);
            title = btn.parentElement.parentElement.querySelector('input').value
            description = btn.parentElement.parentElement.parentElement.querySelector('textarea').value
            // console.log(btn.parentElement.parentElement.parentElement);
            // console.log(title, description);
            index = store.findIndex(i => i.title === a & i.description === b)
            store[index].title = title
            store[index].description = description
            localStorage.setItem("data", JSON.stringify(store))
            console.log(btn.parentElement.parentElement.parentElement);
            btn.parentElement.parentElement.parentElement.innerHTML = `<div>
            <button class="accordion" id="incomplete">
                <i class="fa fa-chevron-down"></i>
                <label>${title}</label>
                <div class="icons">
                <input type="checkbox">
                <i class="fas fa-pen"></i>
                <i class="fas fa-trash"></i>
                </div>
           </button>
           <p class="panel">${description}</p>
        </div>`
            console.log(index);       
            console.log(store);
            toggleItem();
            editItem();
        })
    })
}

// function searchItem() {
//    searchButton.addEventListener("click", (e) => {
//     searchQuery = searchInput.value.toLowerCase();
//     console.log(e.target);
//     // console.log(searchQuery);
//     const filterItems = Array.from(incompleteTasks.children)
//     filterItems.forEach((item) => {
//         if(item.innerHTML.toLowerCase().includes(searchQuery)){
//             item.style.display = "block"
//         } else {
//             item.style.display = "none"
//         }
//     })
//     searchInput.value = ""

//    })
// }


// searchItem();


function searchItem() {
    searchInput.addEventListener("input", (e) => {
     searchQuery = searchInput.value.toLowerCase();
     console.log(e.target);
     const filterItems = Array.from(incompleteTasks.children)
     filterItems.forEach((item) => {
         if(item.innerHTML.toLowerCase().includes(searchQuery)){
             item.style.display = "block"
         } else {
             item.style.display = "none"
         }
     })
     
 
    })
 }
 
 searchItem();