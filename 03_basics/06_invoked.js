// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    console.log(`DB Connected`);
})(); // First () is for function and second () is for execution

//IIFE is used to protect a code from global pollution

(() => {
    console.log(`DB Connected`);
})();

((name) => {
    console.log(`${name} DB Connected`);
})('Samiksha');