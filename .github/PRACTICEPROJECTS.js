//  random shortcut = shift + alt + down arrow to duplicate the line


//PRinting all the mathematical tables till 10

for (let i = 0; i <= 10; i++) {//outer loop

    const element = i;
    console.log(`${element}` )

    for (let j = 0; j <= 10; j++) {//inner loop
    const element = i + "*" + j + `=` + i * j; // multiplying
    console.log(`${element}` )
    
    }

    
}


//Making a calulator using JavaScript

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

//making calender using JavaScript

function getCurrentDate() {
    const date = new Date();
    return date.toDateString();
}