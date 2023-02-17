// Rebuilt logic
const taskTitle = document.getElementById("input-title")
const taskDescription = document.getElementById("input-description")
const addBtn = document.getElementById("add-btn")
const incompleteTasks = document.getElementById("incomplete")

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
// deleteToDo()
}

if (data === null){
    store = []
} else {
    store = JSON.parse(data)
}

// store = JSON.parse(data)
store.forEach((item) => {
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
        // console.log(btn, index)
        btn.addEventListener("click", () => {
            title = btn.parentElement.parentElement.querySelector('label').innerText
            description = btn.parentElement.parentElement.parentElement.querySelector('p').innerText
            btn.parentElement.parentElement.parentElement.innerHTML = `<div class="editmode">
            <button class="accordion">
                <i class="fa fa-chevron-down"></i>
                <input type="text" value="${title}">
                <div class="icons">
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
            deleteToDo();
        })
    })
}

// old search logic
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


const searchText = document.getElementsByClassName('searchTerm')[0];
searchText.addEventListener('input', (e) => {
    const text = e.target.value.toLowerCase();
    console.log(text)
    const arrTitle = Array.from(document.querySelectorAll('.accordion > label'))
    const arrTitle1 = arrTitle.map(x => x.innerText.toLowerCase())
    const arrDes = Array.from(document.querySelectorAll('.panel'))
    const arrDes1 = arrDes.map(x => x.innerText.toLowerCase())
    console.log(arrDes1, arrTitle1)

    for (let i = 0; i < arrTitle.length; i++) {
        if (arrTitle1[i].includes(text) || arrDes1[i].includes(text)) {
            // arrDes[i].parentElement.style.display = "block"
            console.log(arrDes[i].parentElement)
            arrDes[i].parentElement.style.display = "block"

        } else {
            arrDes[i].parentElement.style.display = "none"
        }
    }
    console.log(arrTitle, arrDes)
})