//for loop with break and continue in javascript
// for loop is a control flow statement that allows us to execute a block of code repeatedly 
// until a certain condition is met.
// syntax of for loop:
// for (initialization; condition; increment/decrement) {
//     // code to be executed
// }

// example of for loop:
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// in this example, the for loop will execute the block of code inside the curly braces 
// five times, and it will log the value of i to the console each time. 
// The loop will start with i equal to 0, and it will continue to execute as long as i is less than 5. 
// After each iteration, i will be incremented by 1.

// break statement in for loop:
// the break statement is used to exit a loop prematurely. 
// When the break statement is encountered inside a loop, the loop will immediately stop executing, 
// and the program will continue with the next statement after the loop.

// example of break statement in for loop:
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break; // this will exit the loop when i is equal to 3
    }
    console.log(i);
}

// in this example, the for loop will execute until i is equal to 3. 
// When i is equal to 3, the break statement will be executed