let aTag = Array.from(document.getElementsByTagName("a"));
const mainLanguages = document.getElementsByClassName("main__languages")[0]
const input = document.getElementsByTagName("input")[0];
const submit = document.getElementsByTagName("button")[2]
submit.removeAttribute("disabled");
input.removeAttribute("disabled");

aTag.forEach(ele => {
    if (ele.innerText.includes("2.0")){
        mainLanguages.removeChild(ele)
    }
})

submit.addEventListener("click", doSumbit)

function doSumbit(){
input.value = "Riya"
const a = document.createElement("a")
a.setAttribute("href","https://www.ineuron.ai")
a.setAttribute("target","_blank")
a.innerText = input.value
console.log(a);
mainLanguages.appendChild(a)
}

