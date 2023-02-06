const buttonDiv = document.querySelectorAll(".nav-center div")[2];
let x = document.createElement("a")
x.classList.add("btn")
x.textContent="Pro Subscription"
buttonDiv.append(x)

const tagDiv = document.querySelectorAll(".tags-container div")[0]
const newTag = document.createElement("a");
newTag.setAttribute("href","#");
newTag.innerText = "Chinese (7)"
tagDiv.appendChild(newTag)

const recipeGallery = document.querySelector(".recipe-gallery");

const newCard = document.createElement("div");
newCard.className = "card";

const recipeText = document.createElement("a");
recipeText.className = "recipe-text";
recipeText.setAttribute("href","#");

const image = document.createElement("img");
image.className = "recipe-img";
image.setAttribute("src","./img/recipe-5.jpeg");

const recipeName = document.createElement("h5");
recipeName.className = "recipe-name";
recipeName.innerText = "Chinese Special";
const recipePara = document.createElement("p");
recipePara.className = "recipe-disp";
recipePara.innerText = "Prep : 15min | Cook : 30min";

recipeText.appendChild(image);
recipeText.appendChild(recipeName);
recipeText.appendChild(recipePara);
newCard.appendChild(recipeText);
recipeGallery.appendChild(newCard);

const name1 = document.querySelector(".page-footer p a");
name1.innerText = "Riya Tiwari";