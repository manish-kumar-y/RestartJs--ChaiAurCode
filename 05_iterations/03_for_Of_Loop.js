// const value = [19,44,55,24,51,5,42,34];
// for (const num of value) {
//     console.log(num);
    
// }


// const Avengers = ["Thor","IronMan","CaptionAmerica","SpiderMan","AntMan"];
// for (const names of Avengers) {
//     console.log(names);
    
// }


// const greeting = "Hello World";
// for (const index in greeting) {
//     console.log(`Greet index ${index} value = ${greeting[index]}`);
// }


// const greeting = "Hello World";
// for (const index of greeting) {
//     console.log(`Greet index value = ${index}`);
// }




const map = new Map();
map.set('In',"India");
map.set('Us',"United state of America");
map.set('Fr','France')
// console.log(map);

for (const [key,value] of map) {
    console.log(key +':-'+ value);
    
}