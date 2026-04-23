

//koi v bnde da conversion karna hove ta usde lyi String(bnda), Number(bnda), Boolean(bnda) functions use krne chahide ne,
//  capital S, N, B use krne chahide ne, eh class based functions ne,class based mtlb ki eh functions kisi v type de data nu string, number, boolean ch convert kar sakde ne,

let someNumber = "100abc"

let x = String(someNumber) //string da S capital 
//ehde nal number v string ch convert ho gya
//pr jdo console.log(x) dekhange ta ohne "100" print krdeta, double quotes ch aayuga
//console.log(x) nal 100 ta krke aya kiunki string jo v howe print ta krni hi a \
//ohne bss deal as a string krna
console.log(typeof x);
console.log(x);


//kiwe string nu number ch convert krna , ohde lyi Number() function use krna, capital N use krna class based a, 
//  ehde nal x number ch convert hogya
// pr je "100abc" krdiye x nu tahnvi ehne number bnadena
let Y = Number(x) 
console.log(typeof Y)
console.log(Y)
//pr jdo console.log(Y) dekhange ta ohne 100 print krdeta, number ch convert ho gya 

//basically let a = string(b) a string bnmju
// let a = number(b)   b number bnju

// hun boolean nu number ch convert krna, true te 1 ayuga false te 0
let isLoggedIn = true
let booleanToNumber = Number(isLoggedIn)
console.log(booleanToNumber) //1 print hoga

let isLoggedIn2 = false
let booleanToNumber2 = Number(isLoggedIn2)
console.log(booleanToNumber2) //0 print hoga

//null nu number ch convert krna, null te 0 print hoga
let nullValue = null
let nullToNumber = Number(nullValue)
console.log(nullToNumber) //0 print hoga

//undefined nu number ch convert krna, undefined te NaN print hoga
let undefinedValue = undefined
let undefinedToNumber = Number(undefinedValue)
console.log(undefinedToNumber) //NaN print hoga     

//string nu boolean ch convert krna, non-empty string te true print hoga, empty string te false print hoga
let nonEmptyString = "Hello"
let stringToBoolean = Boolean(nonEmptyString)
console.log(stringToBoolean) //true print hoga

let emptyString = ""
let emptyStringToBoolean = Boolean(emptyString)
console.log(emptyStringToBoolean) //false print hoga

//number nu boolean ch convert krna, non-zero number te true print hoga, zero te false print hoga
let nonZeroNumber = 42
let numberToBoolean = Boolean(nonZeroNumber)
console.log(numberToBoolean) //true print hoga

let zeroNumber = 0
let zeroNumberToBoolean = Boolean(zeroNumber)
console.log(zeroNumberToBoolean) //false print hoga     

//null nu boolean ch convert krna, null te false print hoga
let nullToBoolean = Boolean(null)
console.log(nullToBoolean) //false print hoga

//undefined nu boolean ch convert krna, undefined te false print hoga
let undefinedToBoolean = Boolean(undefined)
console.log(undefinedToBoolean) //false print hoga  

//a