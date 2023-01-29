const onBody = document.getElementsByTagName("body")[0];
const heading = document.createElement("h1")
heading.innerText = "Click anywhere and create the emojies."
heading.style.textAlign = "center";
onBody.appendChild(heading)
onBody.addEventListener('click', function(event){
    const emoji = document.createElement("div");
    emoji.classList.add("emoji-pop")
const emojisList = ['😂', '😛', '😁', '😍', '🫡', '😥', '😅','😉', '😑', '🥵', '🥲', '😋', '🤨', '🙄'];
    let x = Math.floor(Math.random() * emojisList.length)    
    emoji.innerText = emojisList[x]
    onBody.appendChild(emoji)
    emoji.style.left = event.clientX - 35 + "px";
    emoji.style.top = event.clientY - 35 + "px";
    if (heading.parentNode) {
        heading.parentNode.removeChild(heading);
      }
    setTimeout(() => {
        emoji.style.transform = "scale(0)"
    }, 2000)
})





