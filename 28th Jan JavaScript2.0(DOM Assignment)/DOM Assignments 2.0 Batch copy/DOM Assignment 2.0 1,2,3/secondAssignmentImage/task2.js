const accordianWrapper = document.getElementsByClassName("accordian-wrapper")[0]
console.log(accordianWrapper);
const accordian = document.createElement("div")
accordianWrapper.appendChild(accordian);
accordian.classList.add("accordian")
const addSkillHeading = document.createElement("h3");
accordian.appendChild(addSkillHeading);
addSkillHeading.innerText = "Skills";
addSkill = document.createElement("p");
accordian.appendChild(addSkill);
addSkill.innerText = "I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over the Github."

console.log(accordian);