 // the modern way of anonymous function is the arrow function 


 // arrow function we no need to write function keyword as well

// example 1
 let value = ()=>{


    console.log("hello world");
 }

 value();



// Example 2

 let decider = (name)=>{

console.log("Hello", name);

 }

 decider("Buva");


 // example 3

let addition = (a,b)=>{

return a+b;

 }

 let output = (300+500);
 console.log(output);

//example 4

// if the function has only one line no need to mention return and {} as well

let expected = (c,d)=> c+d;

let expec = expected(90,99);
console.log(expec);


// if there is only one parameter we no need to mention () as well

/**
 * 
 * @param{String} name
 */


let input = name=>console.log(name.toLowerCase());

input("BUVANESH");

