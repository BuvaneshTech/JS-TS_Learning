// now we are in example 1 file if we wnat to use the below variables and methods inside any of our project we need to use export keyword

 //Example 1 // before every variable and method we can declare export keyword
export let x = 10;

export let username = "Buvanesh";


export function hello(){


    console.log("I am a hello function");
}

 

// Example 2 // we can d eclare export  keyword at last instead of giving it in all the variables and functions


// the below methods will be imported ion example 3 file


let y = 100;

let user = "Kishore raja";

function vavval(){


    console.log("I am  a vavval function");
}

export{y,user,vavval}