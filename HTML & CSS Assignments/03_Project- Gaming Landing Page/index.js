const navOptions = document.querySelector('.logo-navlist');
const hamburger = document.querySelector('.navbar-menu');

hamburger.addEventListener('click', () => {
    const visibility = navOptions.getAttribute("data-visible")
    if (visibility === "false"){
        navOptions.setAttribute("data-visible", true);
        hamburger.setAttribute("aria-expanded", true);
    } 
    else {
        navOptions.setAttribute("data-visible", false);
        hamburger.setAttribute("aria-expanded", false);
    }
})
