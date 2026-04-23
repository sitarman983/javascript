let score  = 72
let score2 = "72" //in double quotes,makes it string
console.log(typeof score);

console.log(typeof score2)

let valueInNumber = Number(score2) //capital N use krna class based a, 
//  ehde nal score number ch convert hogya
// pr je "72abc" krdiye score2 nu tahnvi ehne number bnadena 
//pr jdo console.log(valueInNumber) dekhange ta ohne NaN
//print krdena mtlb not a number, j score2 = null krdiye ta print 0 hoyuga
// undefined likhe te NaN ajuga ,string likhe te v nan
// true te 1 ayuga false te 0
console.log(typeof valueInNumber)