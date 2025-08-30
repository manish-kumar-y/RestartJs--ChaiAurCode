// const temp = 40;
// const isLoggedIn = false;

// if (isLoggedIn) {
//     console.log(`temprature = ${temp}`);
    
// }
// else{
//     console.log("Plz loggedIn");
    
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==


// if (40<20) {
//     console.log("40 is less than 20");
    
// }
// else if (40<=20){
//     console.log("40 is less then or equal to 20");
    
// }
// else {
//     console.log("40 is grater than 20");
    
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allow to Use This Website");
    
}
else{
    console.log("Sorry You are not Use This Website");
    
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log('You are logged In');
    
}
else{
    console.log("You are not logged In ");
    
}