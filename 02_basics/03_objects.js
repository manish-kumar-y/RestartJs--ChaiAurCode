/*

| **Topic**             | **Syntax / Example**                            | **Short Definition**           |
| --------------------- | ----------------------------------------------- | ------------------------------ |
| **Create Object**     | `const obj = { name: "Manish", age: 25 };`      | Object literal (common way).   |
| **Constructor**       | `const obj = new Object(); obj.key = "value";`  | Create using `new Object()`.   |
| **Class / Function**  | `class User { constructor(n){this.name=n;} }`   | Blueprint for objects.         |
| **Access Property**   | `obj.name` / `obj["age"]`                       | Dot or bracket notation.       |
| **Add Property**      | `obj.city = "Delhi";`                           | Add new key\:value.            |
| **Update Property**   | `obj.age = 30;`                                 | Modify value.                  |
| **Delete Property**   | `delete obj.age;`                               | Remove property.               |
| **Check Property**    | `"age" in obj` / `obj.hasOwnProperty("age")`    | Check if key exists.           |
| **Keys / Values**     | `Object.keys(obj)` / `Object.values(obj)`       | Get all keys / values.         |
| **Entries**           | `Object.entries(obj)`                           | Get key-value pairs as array.  |
| **Clone / Merge**     | `Object.assign({}, obj)` / `{...obj1, ...obj2}` | Copy or merge objects.         |
| **Loop (for...in)**   | `for (let k in obj) console.log(k, obj[k]);`    | Iterate keys.                  |
| **Loop (entries)**    | `Object.entries(obj).forEach(([k,v]) => ... );` | Iterate key-value pairs.       |
| **Nested Object**     | `obj.info.email`                                | Access inner objects.          |
| **Destructuring**     | `const { name, age } = obj;`                    | Extract properties easily.     |
| **Freeze**            | `Object.freeze(obj)`                            | No add/update/delete.          |
| **Seal**              | `Object.seal(obj)`                              | Update allowed, no add/delete. |
| **Optional Chaining** | `obj?.nested?.key`                              | Safe access (avoids error).    |
| **JSON → String**     | `JSON.stringify(obj)`                           | Convert object → string.       |
| **String → JSON**     | `JSON.parse(str)`                               | Convert string → object.       |


*/




//============== Object ===============================

// const obj = {name : "Manish",
//               age : 25, 
//               mail : "info@manish.com",};

// console.log(obj.name);
// console.log(obj["age"]);

const obj2 = new Object();  
obj2.name = "Sonu";
obj2.age = 22; 
// console.log(obj2);
// console.log(obj2.name);

obj2.city="noida";
console.log(obj2);

// obj2.city = "Delhi";
//       console.log(obj2);
      
// delete obj2.city;
// console.log(obj2);

// console.log("age" in obj2);   //=> age exist or not return boolean value 

// console.log(obj2.hasOwnProperty("mail"));   //=> mail exist or not return boolean value 

// console.log(Object.keys(obj2));    // => return all keys
// console.log(Object.values(obj2));  //=> return all values
// console.log(Object.entries(obj2));  // => return keys and values pairs as arrays 


// Object.freeze(obj2);    //=> No add/delete/modify
// obj2.age = 28;
// Object.mail = "mk@gmail.com"
// delete obj2.name;
// console.log(obj2);

// Object.seal(obj2);  //=> only modify , no add or delete
// obj2.age = 30;
// obj2.id = "K87654"
// delete obj2.name;
// console.log(obj2);



