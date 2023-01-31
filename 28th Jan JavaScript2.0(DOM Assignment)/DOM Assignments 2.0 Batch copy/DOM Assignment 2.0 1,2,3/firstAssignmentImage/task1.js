let anchor = document.createElement("a")
anchor.innerText = "Hire me"
let li = document.createElement("li")
li.appendChild(anchor)
let list = document.getElementsByTagName("ul")[0]
list.appendChild(li)