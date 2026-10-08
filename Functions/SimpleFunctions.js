// functions are the one which are used to do a repetativbe task 


// Simple function ; No input no output

 // functions will be stored in heap memory


 // the functions which are create dinside the class are known as methods

 //if not declared inside the class it is functions



function simple(){
    console.log("Simple function");
}


simple();


// function with parameter



/**
 * @param {string} username
 */

function findUser(username){

console.log('The user name is', username);

}


findUser("Buvanesh");



// function with input  and output


/**
 * 
 * @param {number} x
 * @param {number} y
 */
function add(x,y){

let sum = x+y;
return sum;
}


let values = add(88,99);
console.log(values);



