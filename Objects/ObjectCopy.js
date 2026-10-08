// making a copy of existing object using spread operator is known as shallow copy

// spread operator is defined by {3 dots following with Existing_variable name} let newVariablename =  {...Existing_variablename}



let user = {

name: 'Kishore',
age:32,
salary: 100000

};


let newUser = {...user}; // spread operator // and it is known as shallow copy

console.log(user);
console.log(newUser);


