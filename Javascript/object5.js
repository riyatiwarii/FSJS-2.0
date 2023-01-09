let myname = 'Riya';
String.prototype.upper = function (){
    console.log(`It is changed to uppercase: ${this.toUpperCase()}`)
}

let tiwari = 'tiwari'
myname.upper();
tiwari.upper();