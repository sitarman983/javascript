//object de-structure and JSON api introduction

//object de-structure krna, object de-structure krke asi object de properties nu alag alag variables ch store kr sakde haan,
let person = {
    name: "uday",
    age: 30,
    city: "delhi"
}

//object de-structure krke asi object de properties nu alag alag variables ch store kr sakde haan,
let {name, age, city} = person
console.log(name) //uday print houga
console.log(age) //30 print houga
console.log(city) //delhi print houga











//object de-structure krke asi object de properties nu alag alag variables ch store kr sakde haan, te asi object de properties nu rename v kar sakde haan,
let {name: personName, age: personAge, city: personCity} = person
console.log(personName) //uday print houga
console.log(personAge) //30 print houga
console.log(personCity) //delhi print houga

//object de-structure krke asi object de properties nu alag alag variables ch store kr sakde haan, te asi object de properties nu rename v kar sakde haan, te asi object de properties nu default value v assign kar sakde haan,
let {name: personName2, age: personAge2, city: personCity2, country: personCountry2 = "india"} = person
console.log(personName2) //uday print houga
console.log(personAge2) //30 print houga
console.log(personCity2) //delhi print houga
console.log(personCountry2) //india print houga, kyunki country property object ch nahi hai, te asi default value assign kar diti hai

//object de-structure krke asi object de properties nu alag alag variables ch store kr sakde haan, te asi object de properties nu rename v kar sakde haan, te asi object de properties nu default value v assign kar sakde haan, te asi nested object de properties nu v de-structure kar sakde haan,
let person2 = {
    name: "uday",
    age: 30,
    city: "delhi",
    address: {
        street: "123 main st",
        city: "delhi",
        country: "india"
    }
}

let {name: personName3, age: personAge3, city: personCity3, address: {street, city: addressCity, country}} = person2
console.log(personName3) //uday print houga
console.log(personAge3) //30 print houga
console.log(personCity3) //delhi print houga
console.log(street) //123 main st print houga
console.log(addressCity) //delhi print houga
console.log(country) //india print houga

//object de-structure krke asi object de properties nu alag alag variables ch store kr sakde haan, te asi object de properties nu rename v kar sakde haan, te asi object de properties nu default value v assign kar sakde haan, te asi nested object de properties nu v de-structure kar sakde haan, te asi array de properties nu v de-structure kar sakde haan,
let person3 = {
    name: "uday",
    age: 30,
    city: "delhi",
    hobbies: ["reading", "coding", "traveling"]
}

let {name: personName4, age: personAge4, city: personCity4, hobbies: [hobby1, hobby2, hobby3]} = person3
// console.log(personName4) //uday print houga          
// console.log(personAge4) //30 print houga
// console.log(personCity4) //delhi print houga
// console.log(hobby1) //reading print houga
// console.log(hobby2) //coding print houga
// console.log(hobby3) //traveling print houga
//object de-structure krke asi object de properties nu alag alag variables ch store kr sakde haan, te asi object de properties nu rename v kar sakde haan, te asi object de properties nu default value v assign kar sakde haan, te asi nested object de properties nu v de-structure kar sakde haan, te asi array de properties nu v de-structure kar sakde haan, te asi function de parameters nu v de-structure kar sakde haan,
function printPerson({name, age, city}){
    console.log(`Name: ${name}, Age: ${age}, City: ${city}`)
}

printPerson(person) //Name: uday, Age: 30, City: delhi print houga