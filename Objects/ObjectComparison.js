let customer={
name : "Buvanesh",
age : 30,
country: "Indian"

}


let customer1={
name : "Buvanesh",
age : 30,
country: "Indian"

}


console.log(customer1===customer); // it will return false
console.log(customer1==customer); // it will return false


 // the expected value is true but it will return false because Objects are stored in heap memory

 // and for customer and Customer1 are same objects but stored in different addresses thats why we will get false

 // so to get output as expected convert it into JS string and do comparision



 console.log(JSON.stringify(customer) === JSON.stringify(customer1)); // this will return true
  console.log(JSON.stringify(customer) == JSON.stringify(customer1)); // this will return true



  