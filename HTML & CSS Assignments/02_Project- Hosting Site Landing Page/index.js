const hamburger = document.getElementById('ham-btn');
const navoptions = document.getElementById('nav-options');
console.log(hamburger);

function navToggle(){
    hamburger.classList.toggle('open');
    navoptions.classList.toggle('show-options')
}

btn.addEventListener('click', navToggle);