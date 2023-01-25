const onBody = document.getElementsByTagName("body")[0];

const heading = document.createElement("h1")
heading.innerText = "Click anywhere and create the emojies."
heading.style.textAlign = "center";
onBody.appendChild(heading)
// console.log(heading);
onBody.addEventListener('click', function(event){
    const emoji = document.createElement("div");
    emoji.classList.add("emoji-pop")
const emojisList = ['😂', '😛', '😁', '😍', '🫡', '😥', '😅','😉', '😑', '🥵', '🥲', '😋', '🤨', '🙄'];
    let x = Math.floor(Math.random() * emojisList.length)    
    emoji.innerHTML = emojisList[x]
    emoji.style.left = event.clientX - 35 + "px";
    emoji.style.top = event.clientY - 35 + "px";
    onBody.appendChild(emoji);
    setTimeout(() => {
        emoji.style.transform = "scale(0)"
    }, 2000)
    onBody.removeChild(heading);
})