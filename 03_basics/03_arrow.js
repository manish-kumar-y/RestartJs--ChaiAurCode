// Immediately Invoked Function Expressions (IIFE)

// const name = "Manish";
// const price = 200;

// function greet(){
//     return `Hello ${name} , Welcome to this website This Product price is ${price}.`
// }

// console.log(greet());


// const user = {
//     username: "Manish",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);
//     }

// }
// user.welcomeMessage();
// user.username = "Anish" 
// user.welcomeMessage();

// console.log(this);


// function friends(){
//     let username = "Sonu"
//     console.log(this.username);  //=> same block dont use this.
    
// }
// friends();


// friendlist = () => {
//     let name1 = "Sonu";
//     let name2 = "Vijay";
//     let name3 = "Shailendra";
//     let name4 = "Deepak";

//     return [name1, name2, name3, name4];
// };

// console.table(friendlist());

// const add=(num1,num2)=>{
//     return num1+num2;
// }
// console.log(add(6,9));


// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1,num2)=> (num1+num2);
// console.log(addTwo(5,8));


const user =(username)=>({username:"Manish",isloggedIn:true})
console.log(user());
