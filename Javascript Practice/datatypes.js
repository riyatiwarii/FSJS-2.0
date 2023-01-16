// DATATYPES 

// 7 PRIMITIVE Datatypes

// String, Symbol, Number, Null, Undefined, BigInt, Boolean

// 😨
// 🤓

// String
// let person = "Riya";
// console.log(person.toUpperCase());

// How does .toUpperCase() work, though? Initially you might think that strings are really objects in disguise
// and try assigning properties to them. But that doesn't work.

// If we are treating strings as an object then let's try to assign it a property "favouriteThing."

// let person = "Riya"
// person.favouriteThing = "Mousse cake"

// console.log(person.favouriteThing);

// It doesn't work but still it also doesn't trigger any error and returns "undefined"
// My dear friend, we know that Javascript acts like the smartest guy and in order to allow you
// to do this thing, it does something tricky. Let's find out!

let person = new String ("Riya")
console.log(person);
console.log(typeof person);

person.favouriteThing = "Mousse cake"

console.log(person.favouriteThing);

// Wrapper Objects

// All primitive types except null and undefined have their corresponding wrapper objects.



// Symbol


// Number

// console.log(777 / "Riya")

// NaN (Not a Number) simply represents a value which could not be determined by computer arithmetic.

// console.log(0 / 0)
// console.log(0*Infinity)
// typeof(NaN)

// It's datatype in number. However, it is not a real number and
// it represents any number outside of the ECMAScript.

// NaN < 1;    
// NaN > 1;   
// NaN == NaN; 
// isNaN(NaN)

// Null

// console.log(typeof null);

// We have reason to believe typeof null === “object” is a bug that could bite real content,
// from our spidering of the web. - Brendan Eich

// I think it is too late to fix typeof. The change proposed for typeof
// null will break the existing code. - Crockford 
