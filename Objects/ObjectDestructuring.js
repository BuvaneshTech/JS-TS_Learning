// Example 1


let user = {

    names:"Buvanesh",
    age:32,
    Company:"Infosys",
}

console.log(user);


// the above will print all the values inside the user 

// what if we want only name or age to get printed we can use . operator else below one as well


let {names,age} = user;

console.log(names,age);

// Example 2

// what if we wnat to change the keyname as per our expectations


let user1 = {

name:'Kishore',
age:45,
OldCompany:'Wipro'


}

let{name:FirstName,OldCompany:previousCompany}=user1

console.log(FirstName,previousCompany);


// Nested Object Destructring



let employee = {

name:"Naveen",
salary:32000,
Age:35,

addres : {
no : 45,
Street:"Gundu Mango Street",
City: "Chennai",
}


}


let {name:secondName,salary:FullSalary,addres:{Street}}=employee;
console.log(secondName,FullSalary,Street);