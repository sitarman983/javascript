//high order array loops
//map, filter, reduce, forEach, some, every
//punjabi: ਉੱਚ ਦਰਜੇ ਦੇ ਐਰੇ ਲੂਪ 
//jivemap, filter, reduce, forEach, some, every
//kamm kida krda hai:
//
//map
const arr = [1, 2, 3, 4, 5];
const mappedArr = arr.map(x => x * 2);
console.log(mappedArr); // [2, 4, 6, 8, 10]
// in this example, the map function takes a 
// callback function that multiplies each element
//  in the array by 2.


//filter
const filteredArr = arr.filter(x => x % 2 === 0);
console.log(filteredArr); // [2, 4]

//reduce



const sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15
//kiwe 15`  aaya?
//punjabi: ਕਿਵੇਂ 15 ਆਇਆ?
//reduce function takes a callback function and an initial value (in this case, 0). 
//The callback function takes two arguments: the accumulator (acc) and the current value (curr). 
//The reduce function iterates through each element in the array, applying the callback function to the accumulator and the current value. 
//In this example, the callback function adds the current value to the accumulator. 
//After iterating through all elements in the array, the final value of the accumulator is returned, which is 15 in this case.

//forEach
arr.forEach(x => console.log(x)); // logs each element in the array

//some
const hasEven = arr.some(x => x % 2 === 0);
console.log(hasEven); // true

//every
const allEven = arr.every(x => x % 2 === 0);
console.log(allEven); // false