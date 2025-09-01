// While Loop

// let i = 1;
// while (i <= 10) {
//     console.log(`Here the value of i = ${i}`);
   
//     // i = i + 2;
//     // i += 2;
//     i++;
// }



// const myArray = ["spiderMan","SuperMan","Thor","IronMan","Groot"]
// let index = 0;
// while (index < myArray.length) {
//     console.log(`Array ${index} index value = ${myArray[index]} `);
//     index++;
// }


// let index = 10;
// while (index >= 1) {
//     console.log(`value of your Index = ${index}`);
//     index--;
// }



// Do-While Loop

// let i = 0;
// do {
//     console.log(`value of index = ${i}`);
//     i += 5;
// } while (i<=20);


const myArray = ["spiderMan","SuperMan","Thor","IronMan","Groot"]
let index = myArray.length - 1;
do {
    console.log(`MyArray ${index} index value = ${myArray[index]}`);
    index--;
} while (index >= 0);