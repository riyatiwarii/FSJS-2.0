// const clearInput = () => {
//     const input = document.getElementsByTagName("input")[0];
//     input.value = "";
//   }
  
//   const clearBtn = document.getElementById("clear-btn");
//   clearBtn.addEventListener("click", clearInput);

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}