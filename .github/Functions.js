//learning functions in javascript
//function declaration
function greet(name) {
    console.log("Hello, " + name + "!");
}

//function expression
const add = function(a, b) {
    return a + b;
};

//arrow function
const multiply = (a, b) => a * b;

//calling the functions
greet("Alice"); // Output: Hello, Alice!
console.log(add(5, 3)); // Output: 8
console.log(multiply(4, 6)); // Output: 24



function loginuserMessage(username) {
    return`${username} just logged in`
}

console.log(loginuserMessage("Alice")) // Output: Alice just logged in




//aga username di jaga te "tarman likhda ohne tarman print kr dena 
// pr j niche keha print krn nu"uday" ta ohne overide krke uday krna
function loginuserMessage(username) {
    if(username === undefined){
        return "No username provided"
    }
    return`${username} just logged in`
}//agar username provide nahi kiya gaya to "No username provided" return karega

console.log(loginuserMessage()) // Output: No username provided
//username ===undefined or !username  same chiz a
