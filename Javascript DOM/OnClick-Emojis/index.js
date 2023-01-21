const btn = document.getElementsByTagName("button")[0];
const onBody = document.getElementsByTagName("body")[0];

onBody.addEventListener('click', function(event){
    const emoji = document.createElement("div");
    emoji.classList.add("emoji-pop")
const emojisList = ['😂', '😎', '😛', '😁', '😍', '🫡', '😥', '😅','😉', '😑', '🥵', '🥲', '😋', '🤨', '🙄'];
    a = event.clientX;
    b = event.clientY;
    let x = Math.floor(Math.random() * emojisList.length)    
    emoji.innerHTML = emojisList[x]
    emoji.style.left = a - 35 + "px";
    emoji.style.top = b - 35 + "px";
    onBody.appendChild(emoji)
})