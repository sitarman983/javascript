//how does javascript execute code plus call stack
//call stack is a data structure that keeps track of the function calls in a program.
// it is a stack data structure that follows the Last In First Out (LIFO) principle.
// when a function is called, it is added to the top of the call stack.
// when a function returns, it is removed from the top of the call stack.
// if a function calls another function, the called function is added to the top of the call stack, and so on.


//cycle 1 memory phase
// 1. global execution context is created and added to the call stack.
//cycle 2 execution phase
// 1. global code is executed line by line.
// 2. when a function is called, a new execution context is created for that function and added to the call stack.
// 3. the function's code is executed, and when it returns, its execution context is removed from the call stack.
// 4. this process continues until all code has been executed and the call stack is empty.

// example of call stack:
function first() {
    console.log("First function");
    second();
}

function second() {
    console.log("Second function");
    third();
}

function third() {
    console.log("Third function");
}

first();
// when we run this code, the call stack will look like this:
// 1. first() is called and added to the call stack.
// 2. first() calls second(), which is added to the call stack.
// 3. second() calls third(), which is added to the call stack.
// 4. third() executes and logs "Third function" to the console, then returns and is removed from the call stack.
// 5. second() continues executing and logs "Second function" to the console, then returns and is removed from the call stack.
// 6. first() continues executing and logs "First function" to the console, then returns and is removed from the call stack.

// in this way, the call stack helps JavaScript keep track of function calls and their execution ORDER
// in punjabi, call stack nu "function calls di list" keh sakde haan.
//example with real world objects:
function makeTea() {
    console.log("Boiling water");
    boilWater();
    console.log("Steeping tea");
    steepTea();
    console.log("Pouring tea");
    pourTea();
}

function boilWater() {
    console.log("Water is boiling");
}

function steepTea() {
    console.log("Tea is steeping");
}

function pourTea() {
    console.log("Tea is poured");
}

makeTea();
// in this example, the call stack will look like this:
// 1. makeTea() is called and added to the call stack.
// 2. makeTea() calls boilWater(), which is added to the call stack.
// 3. boilWater() executes and logs "Water is boiling" to the console, then returns and is removed from the call stack.
// 4. makeTea() continues executing and logs "Steeping tea" to the console, then calls steepTea(), which is added to the call stack.
// 5. steepTea()

