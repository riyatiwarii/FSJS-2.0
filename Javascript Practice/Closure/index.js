// Let's get closer to JavaScript Closure()

// function sum (x, y){
//   return x+y
// }

// console.log(sum(10, 20));

  // function sum (x) {
  //   function inner (y) {
  //     return x + y 
  //   }
  //   return inner
  // }

  // let store = sum(10);
  // console.log(store(20));

// console.log(store(20));
// console.log(sum());

// console.log(sum(10)(20));

// function sum (x) {
//     return function inner (y) {
//       return x + y 
//     }
//   }

// console.log(sum(10)(20))

// function sum (x) {
//   function inner (y) {
//     y = 30;
//     return x + y 
//   }
//   return inner
// }
// console.log(sum(10)(20))

// function outer () {
//   let a = 777
//   function sum (x) {
//     function inner () {
//       y = 30;
//       return x + y + a 
//     }
//     return inner
//   }
//   return sum
// }

// let store = outer()(20)()
// console.log(store);

// function callAPI (method) {
//   return function (url) {
//     console.log(`fetching data from ${url} using ${method}`);
//   }
// }

// let storing = callAPI('GET');
// storing('http://brainstormers.com/api');
// console.log(storing);


// function updateCount () {
//   let count = 0
//   count++
//   console.log(count);
// }

// count = 5

// updateCount();
// updateCount();

// function countWrapper () {
//   let _count = 0
//   return function () { 
//       count++
//       console.log(count);
//     }

// }

// const updateCount = countWrapper();
// updateCount();
// updateCount();

// countWrapper()();
// countWrapper()();

// E-commerce website

// function sum (x) {
//   function inner (y) {
//     return x + y
//   }
//   return inner
// }

// console.log(sum(10)(20));

// let store = sum(10);
// console.log(store(20));

// let count = 0;
// function counter () {
//   count++
//   console.log(count);
// }

// count = 5;

// counter();
// counter();


// function countWrapper (){
//   let count = 0;
//   function counter (y) {
//     count = count + y
//     console.log(count);
//   }
//   return counter
// }

// let updateCount = countWrapper();
// console.log(updateCount);
// updateCount(20);
// updateCount(20);

// Something unusual- it is not storing the reference.
// countWrapper()(20);
// countWrapper()(20);

  // function sum () {
  //   var x = 20
  //   function inner () {
  //     var y = 10
  //     x = 30
  //     return x + y 
  //   }
  //   return inner
  // }

  // let store = sum();
  // console.log(store());




