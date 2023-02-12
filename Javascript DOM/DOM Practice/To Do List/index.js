const taskTitle = document.getElementById("input-title")
const taskDescription = document.getElementById("input-description")
const addBtn = document.getElementsByClassName("fa-plus-square")[0]
const incompleteTasks = document.getElementById("incomplete")

let storeValue = localStorage.getItem("storedata")
if(storeValue){
  storeValue = JSON.parse(storeValue)
} else {
  storeValue = []
}

function takeInput () {
  if (taskTitle.value){
    storeValue.push({
      title : taskTitle.value,
      description : taskDescription.value
    })
    localStorage.setItem("storedata", JSON.stringify(storeValue))
  } 
  taskTitle.value = ""
  taskDescription.value = ""
}

const addTask = () => {
  takeInput();
  console.log(storeValue);
  let html = ""
  storeValue.forEach((item) => {
    html += `<div>
        <button class="accordion" id="incomplete">
            <i class="fa fa-chevron-down"></i>
            <label>${item.title}</label>
            <div class="icons">
            <input type="checkbox">
            <i class="fas fa-pen"></i>
            <i class="fas fa-trash"></i>
            </div>
       </button>
       <p class="panel">${item.description}</p>
    </div>`
    incompleteTasks.innerHTML = html

  })

  const downArrow = Array.from(document.getElementsByClassName('fa-chevron-down'))

  downArrow.forEach(btn => {
    btn.addEventListener("click", (e) => {
    console.log(e.target);
    btn.classList.toggle("fa-chevron-up")
    if (e.target.classList.contains("fa-chevron-up")){
        e.target.parentElement.nextElementSibling.style.display = "block"
    } else {
        e.target.parentElement.nextElementSibling.style.display = "none"
    }  
    })
  })

  const deleteBtn = Array.from(document.getElementsByClassName('fa-trash'))

  const deleteTask = (e) => {
    // console.log(e.currentTarget.parentNode.parentNode);
    e.target.parentElement.parentElement.parentElement.remove()
    storeValue.splice(e.target.parentElement.parentElement.parentElement, 1);
    localStorage.setItem("storedata", JSON.stringify(storeValue))
    console.log(storeValue);

  }

  deleteBtn.forEach(btn => {
    btn.addEventListener("click", deleteTask)

  })

    const editBtn = Array.from(document.getElementsByClassName('fa-pen'))

    const doEdit = (e) => {

      console.log(storeValue);
      console.log(e.target.parentElement.parentElement);
      select = e.target.parentElement.parentElement.querySelector('label').innerText
      console.log(select);
      select1 = e.target.parentElement.parentElement.parentElement.querySelector('p').innerText
      console.log(select1);
           
      e.target.parentElement.parentElement.parentElement.innerHTML = `<div class="editmode">
      <button class="accordion">
          <i class="fa fa-chevron-down"></i>
          <input type="text" value="${select}">
          <div class="icons">
          <input type="checkbox">
          <i class="fas fa-save"></i>
          <i class="fas fa-trash"></i>
          </div>
     </button>
     <textarea class="panel" type="text" rows="3">${select1}</textarea>
  </div>`

   
  const saveBtn = Array.from(document.getElementsByClassName('fa-save'))

  saveBtn.forEach(btn => {
    btn.addEventListener("click", () => {
      console.log(btn.parentElement.parentElement.querySelector('input').value);
      console.log(btn.parentElement.parentElement.parentElement.querySelector('textarea').value);
    })

  })


  const downArrow = Array.from(document.getElementsByClassName('fa-chevron-down'))

  downArrow.forEach(btn => {
    btn.addEventListener("click", (e) => {
    console.log(e.target);
    btn.classList.toggle("fa-chevron-up")
    if (e.target.classList.contains("fa-chevron-up")){
        e.target.parentElement.nextElementSibling.style.display = "block"
    } else {
        e.target.parentElement.nextElementSibling.style.display = "none"
    }  
    })
  })

  
  const deleteBtn = Array.from(document.getElementsByClassName('fa-trash'))

  const deleteTask = (e) => {
    // console.log(e.currentTarget.parentNode.parentNode);
    e.target.parentElement.parentElement.parentElement.remove()
    storeValue.splice(e.target.parentElement.parentElement.parentElement, 1);
    localStorage.setItem("storedata", JSON.stringify(storeValue))
    console.log(storeValue);

  }

  deleteBtn.forEach(btn => {
    btn.addEventListener("click", deleteTask)

  })
      
    }

    editBtn.forEach(btn => {
      btn.addEventListener("click", doEdit)
      
      takeInput();
    })
    
}


addTask();

addBtn.addEventListener("click", addTask)


