// for (let index = 1; index <= 10; index++) {
//     const element = index;
//     console.log(element);
    
// }


// for (let i = 1; i <= 5; i++) {
//     console.log(`Outer for loop ${i}`);
//     for (let j = 0; j <= 3; j++) {
//         console.log(`Inner loop ${j}, and Outer Loop ${i}`);
//     }
    
// }


// for (let i = 1; i < 10; i++) {
//     const element = i;
//     if (i == 5) {
//         console.log("Detected 5");
//         break;
//     }
//     console.log(element);
    
// }


// for (let i = 1; i < 10; i++) {
//     const element = i;
//     if (i == 5) {
//         console.log("Detected 5");
//       continue
//     }
//     console.log(element);
    
// }

// const myArray = ['Thor','IronMan','SprderMan','CaptionAmerica']
// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
// }



for (let i = 1; i <= 5; i++) {
    console.log(`----------Table of ${i}--------------`);
    for (let j = 1; j <= 10; j++) {
       console.log(`${i} * ${j} = ${i*j}`);   
    }
    
}