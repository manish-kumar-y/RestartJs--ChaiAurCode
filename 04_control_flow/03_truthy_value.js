// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}


// const userEmail = undefined;
// if (userEmail) {
//     console.log("Got User Email");
    
// }
// else {
//     console.log("Dont have user Email");
    
// }

/*

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is Empty");
    
}

const EmptyArray = [];

if (EmptyArray.length === 0) {
    console.log("Array is Empty");
    
}

*/



// Nullish Coalescing Operator (??): null undefined

//  The Nullish Coalescing Operator (??) in JavaScript is used to provide a default value only when the left-hand side is null or undefined.

val1 = null ?? 20;
console.log(val1);
val2 = undefined ?? 20;
console.log(val2);
val3 = 10 ?? 20;
console.log(val3);
val4 = "Ankit" ?? 20;
console.log(val4);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")