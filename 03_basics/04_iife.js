// Immediately Invoked Function Expressions (IIFE)

(function (message) {
    console.log(`DB connected`);
    
})();


((name)=>{
    console.log(`Another DB connected ${name}`);
    
})("Manish");