

// crud means create retrive update delete

let user = {

name:'Buvanesh',
age:32,
country:'India',
isActive:true


}

console.log("Created the user", user);


console.log("updated the user");

user.age=45;
console.log(user);


console.log("deleted a key and value");
delete user.isActive;
console.log(user);


console.log('Adding new key and value inside user');



user.email = "buvanesh@gmail.com";
console.log(user);