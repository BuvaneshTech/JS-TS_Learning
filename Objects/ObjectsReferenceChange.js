let user1 = {

name:'Buvanesh',
age : 32,
salary:10000,


};

let user2 = {

name:'Kishore',
age : 20,
salary:20000,


};


let user3 = {

name:'Hitman',
age : 40,
salary:1000,


};

console.log(user1,user2,user3); // now we will get the output


console.log("Check the difference on top and bottopm of output");

// so 3 objects will be created in heap memory and 3 reference will be created in stack memory

// now what will happen if i assign user2 = user 3;

// user2 reference in Stack memory will cut the connection and will be pointed to user3

user2 = user3;

console.log(user1,user2,user3);


user3=user1; // now user 3 in stack memory will be pointed to user1


console.log("Check the difference on top and bottopm of output");


console.log(user1,user2,user3);