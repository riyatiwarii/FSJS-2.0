const navbar = document.querySelector(".navbar");
const navbarToggle = document.querySelector(".navbar-toggler");
const navList = document.querySelector("#navbarTogglerDemo01");
const navLogo = document.querySelector(".navbar-brand");

const div  = document.createElement("div");
div.appendChild(navbarToggle);
div.appendChild(navList);

navbar.appendChild(div);

navbarToggle.addEventListener("click",() => {  

    navList.removeAttribute("class","collapse");
    navbarToggle.style.marginLeft = "50px";
    navbarToggle.style.marginBottom = "20px";
    navLogo.style.position = "relative";
    navLogo.style.bottom = "110px";

    navbarToggle.addEventListener("click", () => {
        navList.setAttribute("class", "collapse");
        navLogo.style.position = "static";
    })

});