// nested objects means Object inside an object is known as nested objects



let  customer = {

name:'Helena',
age: 24,
isactive : true,
work: 'pvtsector',

address:{
no : 45,
Street: 'Nesamani street',
city: 'Dubai',


}

};
console.log(customer);
console.log(customer.name); // helena
console.log(customer.age); // 24

// How to access values inside the address check below

// on the above a customer object will be created in heap memory and inside the object another memory will be created and known as address

console.log("Accessing address object inside the cutomer object");

console.log(customer.address.no); // 45 
console.log(customer.address.Street); // nesamani street


// Now using square bracket to access values inside address

console.log("Now using square bracket to access values inside address");

console.log(customer['address']); // all values inside address will  be printed
console.log(customer['address']['city']); // dubai

