// design a  calculator


let add = (a,b)=>a+b;
let sub = (a,b)=>a-b;
let multiplication = (a,b)=>a*b;
let division = (a,b)=>a/b;



function calculator(callback,a,b){

console.log("Calculating");
return callback(a,b);

}

let output = calculator(add,100,200);
console.log(output);