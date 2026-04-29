//learning this and arrow functions in javascript



const user ={
    username:"tarman",
    price: 100,
    welcomeMessage: function(){
        console.log(`welcome ${ this.username} to our website!`);
        console.log(this);// ehde nal current context print hoga, yani user object print hoga
        
    }
}



//this object ch chluga but function ch undefined print hoga,
//  kyunki this keyword function ke andar hi defined hai,
//  te asi usnu function ke andar hi access kar sakde haan,
//kiunki this mtlb data and data object ch hi defined hai, 
// te asi usnu function ke andar hi access kar sakde haan,

//this  ta laya kiunki scope de andar hi defined hai, 
//te asi usnu function ke andar hi access kar sakde haan,
//  te asi usnu function ke bahar access nahi kar sakde haan




user.welcomeMessage()
user.username = "uday"//user.username nal value update kar ditta hai, te asi usnu function ke andar hi access kar sakde haan,
user.welcomeMessage() //welcome uday to our website! print houga, kyunki asi username nu update kar ditta hai, te asi usnu function ke andar hi access kar sakde haan
console.log(this);//ure current context empty a ta print kru {}

function steepedTea(){
    console.log(this) //undefined print houga, kyunki arrow function ke andar this keyword lexical scope follow karta hai, yani uska value uske surrounding scope se aata hai, te asi usnu function ke andar hi access kar sakde haan,
}

steepedTea()//this ch bda kuj rkhya hoya,dekhn lyi



// Arrow function ki a?


//normal function
function steepedTea() {
    console.log("tea");
}


// kise variable u assign krke function, 
// jiwe ure const steepedtea nu kita
// bss fer function likhn di lorh ni.
//arrow function

const steepedTea = () => {
    console.log("tea");
};


