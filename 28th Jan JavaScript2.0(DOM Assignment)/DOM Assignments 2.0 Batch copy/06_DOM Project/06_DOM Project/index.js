const headerImg = document.querySelectorAll("header img")[0]
headerImg.setAttribute("src","./assets/ineuron-logo.png");

const span = document.querySelectorAll(".app_price span")[0]
span.innerText = "$10"

const footerSocial = document.querySelector(".footer_social");
const footerSocialIco = document.createElement("div")
footerSocialIco.className = "footer_social_ico";
footerSocialIco.innerHTML = `<i class="fa-brands fa-linkedin"></i>`;
footerSocial.appendChild(footerSocialIco);
