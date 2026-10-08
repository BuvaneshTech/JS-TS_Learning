// the returen type of Object is object 

// and the return type of JSon is String


// In objects keys will nbot be inside double quotes when printed 

// but when we print Json the keys will be inside double quotes




let customer = {

name: 'virat',
jersey_no: 18,
Country: 'India',

}

console.log(customer);
console.log(typeof customer); // object


 // Below method is used to convert Object to JSON using Stringify

let value = JSON.stringify(customer);
console.log(typeof value); // String  
console.log(value);


// below method is used to convert String to object

let convertedvalue = JSON.parse(value);
console.log(convertedvalue);
console.log(typeof convertedvalue); // object



