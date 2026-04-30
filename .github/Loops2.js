//for loop with break and continue in javascript
// loops da duja nam iteration statement hai or iterations

// let Array = [1, 2, 3, 4, 5]
// for (let index = 0;index < Array.length;index++){
//     const element = Array [index];
//     console.log(element)
// }

// let x = 8;
// for (let y = 0; y < x; y++){
//     const element = Array [y];// this will print undefined because we have not defined the array 
//     // and we are trying to access the element of the array which is not defined.
//     console.log(element)
//}
// let x = 8;
// for (let y = 0; y < x; y++){
//     const element = y;
    
    // this will print the value of y from 0 to 7 because 
    //  we have defined the element as y and y is changing in each iteration of the loop.
    //j 8 v print krona ta y<x nu y<=x krna pauga

//       console.log(element)
// }

//remember!!
// console.log("element is " + element) 
// this will give an error because element is defined inside the for loop and 
// we are trying to access it outside the for loop.


for (let i = 0;i<10;i++){

    const element2 = i;

    if(element2==5){ //creating another block inside tehe main block 

       console.log(`${element2} and its inner block here`);
    }

        console.log(`${element2} its outside the inner scope we made`);
}

