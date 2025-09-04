// const value = [1,3,5];
// const nums = value.reduce(function (acc , curr){
//     // console.log(`acc : ${acc} and curr : ${curr} `);
    
//         return acc + curr;
// },0)
// console.log(nums);



// const nums = [1,2,3,4,5,6];
// let totalValue = nums.reduce((acc,curr)=>acc+curr,0)
// console.log(totalValue);


const shopingCard = [
    {
        course : "Js",
        price : 999
    },
    {
        course : "Java",
        price : 2999
    },
    {
        course : "Full Stack Developer",
        price : 99999
    },
    {
        course : "Backend Devloper",
        price : 25000
    },
    {
        course : "python Developer",
        price : 15999
    },
    {
        course : "React",
        price : 1999
    },
]

const totalPrice = shopingCard.reduce((acc,curr)=>{
    console.log(`acc : ${acc} and curr : ${curr.price}`)
    return acc + curr.price;
},0)
console.log(totalPrice);
