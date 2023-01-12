// The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method

const { setMaxIdleHTTPParsers } = require("http");

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// Sort the array
const sorted = ages.sort();
// Find min and max
let min = Math.min(...sorted);
// console.log(min);
let max = Math.max(...sorted);
// console.log(max);

// median
 
let midIndex = sorted.length/2
median = (sorted[midIndex] + sorted[midIndex-1])/2
// console.log(median);

// average

const initialValue = 0;
const sum = sorted.reduce(
    (accumulator, currentValue) => accumulator + currentValue, initialValue
)
const averageValue = sum/sorted.length

// console.log(averageValue);

// range 
// console.log(max - min);

// abs


