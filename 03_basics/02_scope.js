

if(true){
    let a = 10;
    const b = 20;
    var c = 30;
}
// console.log(a);
// console.log(b);
// console.log(c);

/*

function one(){
    const name = "Manish"
   
    function two(){
        const website = "Youtube"
        console.log(name);
    }
    // console.log(website);
    
    two();
}
one();

*/

function addOne(num) {
    return num + 1;
}
console.log(addOne(5));


const addTwo  = function(num) {
    return num +2;
}
console.log(addTwo(9));

const addThree = (num)=>{
    console.log(num + 3);
    
}
addThree(2);