const titleInput = document.getElementsByClassName("input-title")[0];
const detailInput = document.getElementsByTagName("textarea")[0];
const downArrow = Array.from(document.getElementsByClassName('fa-chevron-down'))
const panel = document.getElementsByClassName('panel')
const addToDo = document.getElementsByClassName("fa-plus-square")[0]

downArrow.forEach(btn => {
  btn.addEventListener("click", (e) => {
  btn.classList.toggle("fa-chevron-up")
  if (e.target.classList.contains("fa-chevron-up")){
      e.target.parentElement.nextElementSibling.style.display = "block"
  } else {
      e.target.parentElement.nextElementSibling.style.display = "none"
  }  
  })
})


