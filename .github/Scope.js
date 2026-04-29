//start hi hunda let var or const
//jrurat ki a ehna di?
// { } hi scope a (curly braces)
//jdo kise if else nal aunda ta if else da scope khene a ehnu

if (true) {
let a = 10
const b = 20
var c = 30

}
console.log(a) //10 print nhi houga
console.log(b) //20 print nhi vhouga
console.log(c) //30 print houga
    //kiunki return ni kita but 30 kiwe print hogya?

    

//Global and local scope in javascript

//global scope
let globalVariable = "I am a global variable"

function globalScopeExample(){
    console.log(globalVariable) //I am a global variable print houga    
}

globalScopeExample()

//local scope
function localScopeExample(){
    let localVariable = "I am a local variable"
    console.log(localVariable) //I am a local variable print houga
}

localScopeExample()
//console.log(localVariable) //ReferenceError: localVariable is not defined print houga, kyunki localVariable function ke andar hi defined hai, te asi usnu function ke bahar access nahi kar sakde haan