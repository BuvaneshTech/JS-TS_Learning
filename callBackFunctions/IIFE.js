// IIFE means immediately invoked function expression we no need to call the function separately it will be automatically called while running

//Example 1

let value = function ghreet(){

    console.log("hello world");
}();


//Example2


(()=>{



    console.log("I am IIFE no need to call me separately");
})();

//Example 3
(function (username){

console.log("Hello welcome", username);

})("Buvanesh");



// Example 4


((consumer)=>{

console.log("welcome Consumer", consumer);

})("Kishore");

// Example 5 IIFE cannot have expression name it can be stored in a variable


let output = (function(x,y){



return x+y;

})(300,500);

console.log(output);