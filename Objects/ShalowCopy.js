// Shallow copy is only usefull for objects but it will not effective in nested objects

 // spread operator should be like {...ExistingvaribaleName} assigned to new variable


let user={
name:'Buvanesh',
age:32,
company:'Infosys',

}

// Shallow copy should be declared like in  15

let newUser={...user}; 
console.log(user);
console.log(newUser);


// what wiill happen if we use shallow copy in nested objects

let user1={
name:'Buvanesh',
age:32,
company:'Infosys',

address:{

    no : 40,
    street:'Nesamani street',
    Country:'America',
}

}

// Now i change the value of age

let value={...user1};

user1.age = 40,


//the vbalue in user1 will be changed but it will not get changed in Value

console.log(user1);  

console.log("The output of value ");
console.log(value);

// but when i try to change the value of anything inside the nested loop for example in user object address 
// is inside nested so i am updating value of Street, it will get changed in user output and value output


// thats the issue when we use shallow copy in Nested objects



value.address.street= "lal bahadhur sastree street";

console.log(user1);
console.log(value);