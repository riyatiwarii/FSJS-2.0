// const object1 = {
//     name: 'Riya'
// }

// Object.assign(object1, {
//     name: 'new Riya',
//     tech: 'Javascript'
// })

// console.log(object1)

// const object1 = {
//         name: 'Riya'
//     }
    
// const object2 = {
//     tech: 'Javascript'
// }

// const object3 = Object.assign({}, object1, object2, {
//     database: 'MongoDB'
// })

// console.log(object1);
// console.log(object2);
// console.log(object3);

// const object1 = {}
// object1.name = 'Riya'

// const object1 = {};

// Object.defineProperty( object1,'name', {
//     value: 'Riya',
//     writable: false
// })

// object1.name = 'Modify Name'

// console.log(object1.name)

let object1 = {name:'Riya', tech: 'Javascript'}
let object2 = Object.entries(object1);
console.log(object2);
//[ [ 'name', 'Roger' ], [ 'age', 30 ] ]