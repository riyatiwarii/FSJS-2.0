// Using trim() to remove any trailing whitespace at the beginning and the end of a string.

let stringVar = "  Riya    ";
console.log(stringVar.trim())

// Boolean value is either true or false.
// Writing three JavaScript statement examples which provide truthy value.
// First example

if ("notEmpty"){
    console.log("return true statement")
}
else{
    console.log("can't return true statement")
}

// Second example

if ("7"){
    console.log("return true statement")
}
else{
    console.log("can't return true statement")
}

// Third example

if ([]){
    console.log("return true statement")
}
else{
    console.log("can't return true statement")
}

// Writing three JavaScript statement examples which provide falsy value.
// First example

if (""){
    console.log("return true statement")
}
else{
    console.log("return false statement")
}

// Second example

if (0){
    console.log("return true statement")
}
else{
    console.log("return false statement")
}

// Third example

if (null){
    console.log("return true statement")
}
else{
    console.log("return false statement")
}

// So, Any value from the below values is literally considered as a falsey value and JS engine will not execute it.

// undefined, null, "", 0, NaN