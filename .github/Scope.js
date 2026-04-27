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