var Wrapper = defclass({
    constructor: function (value) {
        this.value = value;
    },
    riya: 7,
    isString: function () {
        return typeof this.value === "string";
    },
    describe: function () {
        if (this.isString()) {
            console.log('"' + this.value + '" is a string.');
        } else {
            console.log(this.value + " is not a string.");
        }
    }
});

var n = new Wrapper(Math.PI);
var s = new Wrapper("Hello World!");

console.log(s.riya);
console.log(s.length);
s.length = 77;
console.log(s.length);



n.describe(); // 3.141592653589793 is not a string.
s.describe(); // "Hello World!" is a string.

function defclass(prototype) {
    var constructor = prototype.constructor;
    constructor.prototype = prototype;
    return constructor;
}




