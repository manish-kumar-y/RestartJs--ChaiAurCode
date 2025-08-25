/*

//Symbol
let sym = Symbol("key2");

const obj = {
    name:"Manish",
    age:25,
    mail:"info@gmail.com",
    isLogedIn:false,
    [sym] :"mySymbol"
}
// console.log(obj);
console.log(obj[sym]);
console.log(obj);

obj.greeting = function(){
    console.log(`Hello ${this.name} I am a basic Function Your age is ${this.age}.`);
    
}

console.log(obj.greeting);

console.log(obj.greeting());

*/

//=======================================================

// const user1 = new Object();      //=> Singleton 

const user2 = {
    id: "123acv",
    pass : "Kuamr234@",
    fullName :{
        age: 35,
        userFullName: {
            FirstName: "Manish",
            LastName:"Kumar"
        }
    }
};
// console.log(user2.fullName.userFullName.FirstName);


const obj1 = {1:"a",2:"b",3:"c"};
const obj2 = {4:"d",5:"e",6:"f"};
const obj3 = {7:"g",8:"h",9:"i"};

// const obj4 = Object.assign({},obj1,obj2,obj3);
// const obj4 = {...obj1,...obj2,...obj3};

// console.log(obj4);



const myPr = [
    {
        id : "123a",
      email : "info@gmail.com"
    },
    {

    },
    {

    },
    {

    },
    {
       name : "Manish Yadav"
    }
];

console.log(myPr[0].id);
console.log(myPr[0].email);
console.log(myPr[4].name);

