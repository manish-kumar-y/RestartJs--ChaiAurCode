const str = "Hello World";

// console.log(str.length);    // => LENGTH OF STRING
// console.log(str.charAt(6));  // => Char of given String

// console.log(str.charCodeAt(0));   // => UTF-16 code of character

// console.log(str.at(-1));    // => negetive value support

// console.log(str.slice(0,5));
// console.log(str.slice(5));
// console.log(str.slice(-5));
// console.log(str.slice(-1));     // => slice extract part of string . support negetive and positive both value



// console.log(str.substring(0,3));   // => similar to slice but not support negetive value 
// console.log(str.substring(-5));   //=> not supported


// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

/*

const str1 = "Manish";
const str2 = "Yadav";

console.log(str1.concat(str2));
console.log(str1.concat(" ",str2));  

*/    //=> join to string


/*

let txt = "    Laptop    ";
console.log(txt.trim());
console.log(txt.trimStart());
console.log(txt.trimEnd());

*/    //=> remove whitespace

/*

let num = "5";
console.log(num.padStart(4,9));
console.log(num.padEnd(3,0));

*/    

/*

console.log("Hi ".repeat(6));
const value = "Hello ";
console.log(value.repeat(8));


*/   //=> repeat the string n times


/*

let message = "i love js . js is great. js is supper";
console.log(message.replace("js","javaScript"));
console.log(message.replaceAll("js","java"));

*/    // => replace value


/*

let fruits = "apple, Banana, Orange, PineApple";
console.log(fruits.split(","));

*/     //=> splits string into array


/*

const massage = "hello guys I am Manish from Bihar. Recently I have completed my B.tech."
console.log(massage.includes("Manish"));
console.log(massage.includes("Ram"));

*/    //=> check string contains substring



/*

let email = "info@manishYadav.com"
console.log(email.startsWith("in"));
console.log(email.endsWith("m"));
console.log(email.endsWith("co"));
console.log(email.startsWith("nfo"))

*/  




/*


const paragraph = "I think Ruth's dog is cuter than your dog!";
console.log(paragraph.indexOf("dog"));
console.log(paragraph.lastIndexOf("dog"));

let searchTerm = "dog";
const indexofFirst = paragraph.indexOf(searchTerm);
console.log(`The index of the first "${searchTerm}" is ${indexofFirst}`);

const lastIndexOf = paragraph.lastIndexOf(searchTerm);
console.log(`The index of the last "${searchTerm}" is ${lastIndexOf}`);

*/      //=> index position




/*

let txt2 = "cat , bat , rat ";
console.log(txt2.match(/at/g));

for(const m of txt2.matchAll(/at/g)){
    console.log(m[0]);
    console.log(m[1]);
    
}

*/    