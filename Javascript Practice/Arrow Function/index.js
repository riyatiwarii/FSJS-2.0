// const printAge = age => {
//     console.log(`Age: ${age}`);
// }

// printAge(22)

// const printName = function (name) {
//     console.log(`${name}`);
// }

// printName("Riya")

// Basic things that we needed to know.

// let myTechSkills = {
//     language : "Javascript",
//     printLanguage : function () {
//         console.log(this.language)
//         setTimeout ( function () {
//             console.log(this.language);
//         }, 3000 )
    
//     }
// }

// myTechSkills.printLanguage();

// let myTechSkills = {
//     language : "Javascript",
//     printLanguage : function () {
//         console.log(this);
//         console.log(this.language)
//         setTimeout ( function () {
//             console.log(this);
//             console.log(this.language);
//         }, 3000 )
    
//     }
// }

// myTechSkills.printLanguage();

// function sayHi () {
//     console.log(this);
// }
// sayHi();

// let myTechSkills = {
//     language : "Javascript",
//     printLanguage : function () {
//         console.log(this);
//         console.log(this.language)
//         let self = this;
//         setTimeout ( function () {
//             console.log(self);
//             console.log(self.language);
//         }, 3000 )
    
//     }
// }

// myTechSkills.printLanguage();

// let myTechSkills = {
//     language : "Javascript",
//     printLanguage : function () {
//         console.log(this);
//         console.log(this.language)
//         setTimeout( () => {
//             console.log(this);
//             console.log(this.language);
//         }, 3000 )
    
//     }
// }

// myTechSkills.printLanguage();

// window.document.addEventListener("click", () => {
//     console.log(this);
// })

// window.document.addEventListener("click", function(){
//     console.log(this);
// })

// window.document.addEventListener("click", (event) => {
//     console.log(event.target);
// })