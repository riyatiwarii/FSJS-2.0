// Creating an object

// let myInfo = {
//     myName : "Riya",
//     myTechStack : "MERN",
//     myCountry : "India",
//     showInfo : function (){
//         console.log(` ${this.myName} | ${this.myTechStack} | ${this.myCountry}`);
//     }
// }

// myInfo.showInfo();
// Riya | MERN | India

// To replicate the same properties and methods of this object for my friends, 
// Everytime, I will need to create an object, right?
// This can be done like this.

// let myFriendInfo = {
//     myName : "friendName",
//     myTechStack : "MERN",
//     myCountry : "India",
//     showInfo : function (){
//         console.log(` ${this.myName} | ${this.myTechStack} | ${this.myCountry}`);
//     }
// }

// myFriendInfo.showInfo();
// friendName | MERN | India

// It could be done for my friend and I had to write repeatedly the properties and methods, right?
// I have to way which is effective and properties and methods can be easily used
// and replicated for my bunch of friends. LET'S GO!-->

// function infoProvider (myName, myTechStack, myCountry) {
//     let personInfo = {
//         myName : myName,
//         myTechStack : myTechStack,
//         myCountry : myCountry,
//         showPersonInfo : function () {
//             console.log(` ${this.myName} | ${this.myTechStack} | ${this.myCountry}`);
//         }
//     }

//     return personInfo;
// }

// let riyaInfo = infoProvider("Riya", "MERN", "India");
// let dearFriend = infoProvider("dearFriend", "MERN", "India");
// riyaInfo.showPersonInfo();
// dearFriend.showPersonInfo();
// Riya | MERN | India
// dearFriend | MERN | India

// 😀 So, we created a function and created all the logic in it by giving the parameters in it
// for passing into our personInfo object and accessing properties and methods defined in the object.
// This logic will return us an object at the last. 
// We could do this just with a normal function.
// But since JS knows, we have to deal with a lot of objects in our code,
// then why no provide something like a special function called
// a CONSTRUCTOR function, right? 🤩 LET'S SEE THE SPECIAL GIFT!-->

// function Infoprovider (myName, myTechStack, myCountry ){
//     this.myName = myName;
//     this.myTechStack = myTechStack;
//     this.myCountry = myCountry;
//     this.showPersonInfo = function () {
//         console.log(` ${this.myName} | ${this.myTechStack} | ${this.myCountry}`);
//     }
// }

// riyaInfo = new Infoprovider("Riya", "MERN", "India")
// riyaInfo.showPersonInfo();

// So, this constructor function is just like a special gift but WHY?

// 👉 First thing when we name it, it should start with an uppercase letter.
// Notice we used "new" keyword while calling the "Infoprovider" function.
// It is because the JS will go into the constructor mode. So, behind the scene
// it creates a new empty object and assigns the object to "this keyword." 
// Just like this -> 👉 "this" {}  👈
// that's why the way we have the properties/methods assigned using dot notation with "this" keywrord.
// At last, JS returns us the object --> 👉 return this 👈

// So, that's how this constructor function is superhandy in creating its instances.
// We can also say constructor is a kind of blueprint to create same type of objects.

