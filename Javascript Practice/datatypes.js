// DATATYPES 

// 7 PRIMITIVE Datatypes

// String, Symbol, Number, Null, Undefined, BigInt, Boolean

// https://javascriptrefined.io/the-wrapper-object-400311b29151

// String

let x = "Riya";
let y = String("JavaScript");
let z = new String("HtmlCSS");

// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof z);

// Accessing existing properties/methods

// console.log(x.length);
// console.log(x.toUpperCase()); 
// console.log(z.length);
// console.log(z.toUpperCase());

// Setting new properties/methods


// console.log(Object.getOwnPropertyDescriptor(z,'length'));
// console.log(Object.getOwnPropertyDescriptor(z, 'check'));

// Symbol


// Number


// Null

// console.log(typeof null);

// We have reason to believe typeof null === “object” is a bug that could bite real content,
// from our spidering of the web. - Brendan Eich

// I think it is too late to fix typeof. The change proposed for typeof
// null will break the existing code. - Crockford 
