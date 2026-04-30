//controlflow.js
// Control flow in JavaScript refers to the order in which the code is executed. It determines how the program flows from one statement to another based on certain conditions or loops. Here are some common control flow statements in JavaScript:

// 1. if statement: It allows you to execute a block of code if a specified condition is true.
/*
if (condition) {
    // code to be executed if condition is true
*/   
// 2. else statement: It allows you to execute a block of code if the condition in the if statement is false.
/*
if (condition) {
    // code to be executed if condition is true
} else {
    // code to be executed if condition is false
}
*/
// 3. else if statement: It allows you to specify a new condition to test if the previous condition is false.
/*
if (condition1) {
    // code to be executed if condition1 is true
} else if (condition2) {
    // code to be executed if condition2 is true
} else {
    // code to be executed if both condition1 and condition2 are false
}
*/



if (true){
    console.log("This will always execute");

}

/*
if(user.isLoggedIn){

}
*/
 
//things we use
// 1. if statement
// 2. else statement
// 3. else if statement
// < this is less than operator
//> this is greater than operator
//<= this is less than or equal to operator
//>= this is greater than or equal to operator

//== this is equal to operator
//!= this is not equal to operator
//=== this is strictly equal to operator
//!== this is strictly not equal to operator
//&& this is the logical AND operator
//|| this is the logical OR operator
//! this is the logical NOT operator

//=== this is the strict equality operator, 
// which checks for both value and type equality.


console.log("using equal to operator");
if (2 == "2"){
    console.log("we are good1");
}
else{
    console.log('we are not good');
}
console.log("using strict equal to operator");
if(2==="2"){
    console.log("we are not good2")

}
else{
    console.log("we are actually good2");
};

const score = 200;
if (score > 100){
    const power = "fly";
    console.log(`user power :${power}`);
}
//j ethe v  console.log(`user power :${power}`); likhidye
//ehne error show krna kiunki scope to bahr agya
//const scope to bahr ni niklda,var scope to bahr nikal janda hai but oh
//koi use ni krda ta krke bcz oh glt a


//this works but wrong way to write code
const score2 = 300;
if (score2 > 150) console.log("score is greater than 150"),console.log("abc");







const userLoggedIN = true;
const loggedInFromGoogle = true;
const debitCard = true;
const loggedInFromEmail = true;

if (userLoggedIN && debitCard && 2==3){ // this condition will never be true because 2 is not equal to 3
    console.log("user is logged in and has a debit card");
}
else if (userLoggedIN || loggedInFromEmail || loggedInFromGoogle||2==3){ // this condition will be true because userLoggedIN is true
    console.log("user is logged in from one of the supported methods");
}

//difference between && and ||
//&& operator will return true if both  operands are true, otherwise it will return false.
//|| operator will return true if at least one of the operands is true, otherwise it will return false.




//switch statement: It allows you to execute a block of code based on different cases.
/*
switch (expression) {
    case value1:
        // code to be executed if expression === value1
        break;
    case value2:
        // code to be executed if expression === value2
        break;
    default:
        // code to be executed if expression doesn't match any case
}
*/
const month = "3"; //we can put just 3 here and in the statement instead of "3" and other "1","2","3"
//  but it is better to put it as a 
// string because switch statement uses strict equality operator (===) to compare the expression 
// with the case values, and if we put it as a number, it will not match with the string case values.

switch (month){
    case "1":
        console.log("january");
        break;
    case "2":
        console.log("february");
        break;
    case "3":
        console.log("march");
        break;
    case "4":
        console.log("april");
        break;
    case "5":
        console.log("may");
        break;
    case "6":
        console.log("june");
        break;
    case "7":
        console.log("july");
        break;
    case "8":
        console.log("august");
        break;
    case "9":
        console.log("september");
        break;
    case "10":
        console.log("october");
        break;
    case "11":
        console.log("november");
        break;
    case "12":
        console.log("december");
        break;
    default:
        console.log("invalid month");
}



//jithe v case match krda otho baad da sara code execute hunda except
//  break statement use krke case match hone te code execute krna band kr sakde haan
//default case is optional, but it is a good practice to include it to handle unexpected cases.
// in punjabi, control flow nu "code di execution da order" keh sakde haan.
//break statement na use kre te os ne matched case to baad da sara code execute krna start kr dinda hai, 
//including default case.
// jdo break statement use krde haan te os case to baad da code execute hona band ho janda hai.




//falsy values

// false,0,-0,BigInt 0n,"",null,undefined,NaN



//truthy values

// all values are truthy except falsy values
//"0" ,0 in string is truthy, "false"or `false` is truthy, [] ,emty arrays are truthy, 
// {} ,object is truthy, function(){} is truthy

 
``