const hamburger = document.querySelector('hamburger');
const navoptions = document.querySelectorall('nav-list');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("active");
    navoptions.classList.toggle("active");
})


