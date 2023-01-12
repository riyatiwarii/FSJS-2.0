// In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of your shopping cart if it has not been already added
//     - remove 'Honey'
//     - modify Tea to 'Green Tea'

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// console.log(shoppingCart.unshift("Meat"));
// console.log(shoppingCart);
// [ 'Meat', 'Milk', 'Coffee', 'Tea', 'Honey' ]
// console.log(shoppingCart.push("Sugar"));
// console.log(shoppingCart);
// [ 'Meat', 'Milk', 'Coffee', 'Tea', 'Honey', 'Sugar' ]
// console.log(shoppingCart.splice(4, 1));
// console.log(shoppingCart);
// [ 'Meat', 'Milk', 'Coffee', 'Tea', 'Sugar']
// console.log(shoppingCart.splice(3, 1, "Green Tea"));
// console.log(shoppingCart)

// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'.
// If it does not exist add to the countries list.

const countries = ["Australia", "Ethiopia", "New Zealand"];
let country = "Ethiopia"
const check = countries.includes(country);
if (check){
    console.log(country.toUpperCase());
} else{
    const include = countries.push(country)
    console.log(countries)
}

