//arrays in javascript

//defining an array
let fruits = ["apple", "banana", "orange"]
console.log(fruits) //["apple", "banana", "orange"] print houga     
//accessing array elements
console.log(fruits[0]) //apple print houga
console.log(fruits[1]) //banana print houga
console.log(fruits[2]) //orange print houga



//modifying array elements
fruits[1] = "grape"
console.log(fruits) //["apple", "grape", "orange"] print houga

//array length
console.log(fruits.length) //3 print houga

//adding elements to an array
fruits.push("kiwi")
console.log(fruits) //["apple", "grape", "orange", "kiwi"] print houga

//removing elements from an array
fruits.pop()
console.log(fruits) //["apple", "grape", "orange"] print houga

//iterating over an array
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}
//apple
//grape
//orange print houga

//using forEach method to iterate over an array
fruits.forEach(function(fruit){
    console.log(fruit)
})
//apple
//grape
//orange print houga

//using map method to create a new array
let upperCaseFruits = fruits.map(function(fruit){
    return fruit.toUpperCase()
})
console.log(upperCaseFruits) //["APPLE", "GRAPE", "ORANGE"] print houga 