//objectt sin javascript me objects ek data structure hai jo key-value pairs ko store karta hai. 
// Objects me hum properties aur methods define kar sakte hain. Properties object ke attributes hote hain,
//  jabki methods functions hote hain jo object ke behavior ko define karte hain.
//object define karna
//difference bw object and functions: object ek data structure hai jo key-value pairs ko store karta hai,
//  jabki function ek block of code hai jo specific task perform karta hai.
//  Object me hum properties aur methods define kar sakte hain, 
// jabki function me hum code likhte hain jo kisi specific task ko perform karta hai. 
// Object me hum data ko organize kar sakte hain,
//  jabki function me hum logic ko organize kar sakte hain.





let person = {
    name: "uday",
    age: 30,
    city: "delhi"
}
console.log(person) //{ name: 'uday', age: 30, city: 'delhi' } print houga-

let koenigrd = {
    owner : "varun",
    tenant : "uday",
    city : "burlington"
    
}
console.log(koenigrd) //{ owner: 'varun', tenant: 'uday', city: 'burlington' } print houga  `                                   
//object ke properties ko access karna
console.log(person.name) //uday print houga
console.log(person.age) //30 print houga
console.log(person.city) //delhi print houga

//object ke properties ko modify karna
person.age = 31
console.log(person.age) //31 print houga

//object me new property add karna
person.country = "india"
console.log(person) //{ name: 'uday', age: 31, city: 'delhi', country: 'india' } print houga

//object me method define karna
let student = {
    name: "uday",
    age: 30,
    city: "delhi",  
    greet: function(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
    }
}