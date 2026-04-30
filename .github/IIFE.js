//learning iife
(function() {
    console.log("This is an IIFE");
})();
// IIFE stands for Immediately Invoked Function Expression.
//  It is a JavaScript function that runs as soon as it is defined. 
// The primary purpose of an IIFE is to create a new scope and avoid polluting the global namespace.

//in punjjabi, IIFE nu "turant chalaya gaya function" keh sakde haan.
//easy example of IIFE:
(function() {
    console.log("Hello, World!");
})();
// This IIFE will immediately log "Hello, World!" to the console when it is defined.
//differnce between normal function and IIFE:
// Normal function:
function normalFunction() {
    console.log("This is a normal function");
}
normalFunction(); // This will log "This is a normal function" to the console when called.

// IIFE:
(function() {
    console.log("This is an IIFE");
})(); // This will log "This is an IIFE" to the console immediately when defined, without needing to call it separately.

//mtlb iife lyi console.log krna zaruri ni, asi usnu kise variable ch assign krke v use kar sakde haan,
//  te asi usnu function ke andar hi access kar sakde haan,


//moving forward in iife, asi usnu kise variable ch assign krke v use kar sakde haan,
const result = (function() {
    return "This is an IIFE";
})();
console.log(result); 
// This will log "This is an IIFE" to the console, as the IIFE returns a string that is assigned to the variable 'result'.