// deep copy are used to make a copy of nested objects


let user = {

name:'Buvanesh',
age:32,
company :"Infosys",

address:{
no :45 ,
street:'brahamanantham street',
country: 'USA',

}
}


let value = structuredClone(user);

console.log(user);

console.log("Value of copy");
console.log(value);


// update the value of nessted loop and check it reflects in original one as well


value.address.country="India";

console.log(user);
console.log(value);