const API_KEY = '1c00e28416c340cb8e3103552232102';
const container = document.querySelector('.weather-container')
const input = document.getElementsByTagName('input')[0]
const getBtn = document.querySelector('.get-btn')
console.log(input);
getBtn.addEventListener('click', () => {
    if(!input.value){
        alert("invalid")
        return
    }
    inputScreen()
    backToScreen()
    
})

function inputScreen () {
    container.innerHTML = `<img class="left-arrow" src="/arrow.png" alt="left-arrow">
<h1><b>What's the weather ☁️ like in your area?</b></h1>
<div>
    <h2>Jaipur, 7th March 8:00am</h2>
</div>
<div class="card" style="width: 24rem;">
    <div class="card-header">
      ☀️ Sunny
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Feels like &#8451</li>
      <li class="list-group-item">Temperature is &#8451</li>
      <li class="list-group-item">Humidity is &percnt;</li>
      <li class="list-group-item">Wind Speed is KMPH</li>
    </ul>
</div>`
}

inputScreen()

function backToScreen () {
const leftArrow = document.querySelector('.left-arrow')
console.log(leftArrow);  
leftArrow.addEventListener('click', () => {
    container.innerHTML = ""

    
})
}

backToScreen()

