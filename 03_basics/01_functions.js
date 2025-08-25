// 1. Function Declaration

/*
function myfun (){
    console.log("Hello , World");
    
}

myfun();

*/

// 2. Function Expression
/*

const func = function(){
    console.log("Hello , World");
    
}
func();

*/

// 3. Arrow Function
/*

let name = "Yadav Ji";
const greet = ()=>{
    console.log(`Hello ${name} this is a Arrow function.`);
    
}

// greet;   //=> this is a function reference
greet();   //=> this is a function executer

*/

// Parameters & Arguments
/*

function addition(a,b){  // (a,b) => here this is parameter
    console.log(a+b);
    return
}
addition(4,6);           // (4,6) => here this is an Argument
addition(3,"6");
addition(7,"M");
addition("a","d");
addition(7 , null);
addition(6 , undefined);
addition(true, 8);

*/

function loginUserMassage (username = "Yadav"){
      if (!username) {
        console.log("Plz enter argument")
        return
      }
        return `${username} just logged In`
}
loginUserMassage("Yadav");   // not executed because you are not console this argument
console.log(loginUserMassage());  
console.log(loginUserMassage(""));
console.log(loginUserMassage("Manish Kumar"));


