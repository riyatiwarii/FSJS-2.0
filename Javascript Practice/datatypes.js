// DATATYPES 

// 7 PRIMITIVE Datatypes

// There are 7 primitive types: string, number, bigint, boolean, symbol, null and undefined.

// String

// Just like using dot notation, we access properties/methods from non-primitives (Objects).
// We do it with primitve datatype also like in string. It is a behind the scene concept.

let x = "Riya";
// --> The first one is just a simple string primitive, like we generally declare.

let y = String (22); //or we can also do: let y = String ("Javascript");
// --> This second one will also be treated like the same above one. But how it is the same?
// --> Because, String() is a function which is taking a parameter for doing type conversion.
// --> It will just coerce/convert this parameter to a string primitive like 22 will be converted into "22" string.

// Check x and y, both datatypes and it will be the same.

// console.log(typeof x);  
// console.log(typeof y);

// That's why both thr above first two codes are not different.

let z = new String("HtmlCSS");
// --> This code is different from those two above.   
// --> It is referring to a string constructor. String function and String Constructor are two different things and give different output.
// --> String constructor doesn't create a string primitive. It creates a string object.

// console.log(typeof z);

// To understand and know more about it, please refer the below MDN link and an article link.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_primitives_and_string_objects
// https://javascriptrefined.io/the-wrapper-object-400311b29151

// Accessing existing properties/methods

// console.log(x.length); //console.log( (new String (x)).length)
// console.log(x.toUpperCase()); 
// console.log(z.length);
// console.log(z.toUpperCase());

// Wrapper Object concept applies on string, number, boolean.

// Setting new properties/methods

// x.length = 15; //console.log( (new String (x)).length)
// x.check = "We're just checking." //console.log( (new String (x)).check)
// console.log(x.length, x.check);

// z.length = 25;
// z.check = "We're just checking z"
// console.log(z.length, z.check);

// console.log(Object.getOwnPropertyDescriptor(z,'length'));
// console.log(Object.getOwnPropertyDescriptor(z, 'check'));

// Symbol

// let a = Symbol("unique a")
// let b = "unique a";
// console.log(a, b);


// Number

// BigInt number range for this tomorrow.

let num = Number(Infinity / Infinity) //NaN
console.log(num );
console.log(typeof num);
console.log(typeof NaN);

// Null

let firstName = "Riya";
let middleName = null;
let lastName = "Tiwari"

console.log(typeof middleName);

// Undefined

let favouriteCookie;
console.log(typeof favouriteCookie);

// console.log(typeof null);

// We have reason to believe typeof null === “object” is a bug that could bite real content,
// from our spidering of the web. - Brendan Eich

// I think it is too late to fix typeof. The change proposed for typeof
// null will break the existing code. - Crockford 

// Boolean

let passMarks = false;

if (passMarks){
    console.log("You've passed the exam.");
} else {
    console.log("You have failed.");
}
