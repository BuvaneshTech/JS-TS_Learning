let user1={
name:'Buvanesh',
age:32,
company:'Infy',

};

let user2={

name:'Kishore',
age:32,
company:'Wipro',

};
let user3={
name:'Hitman',
age:40,
Highest:264,

};
console.log(user1.name,user1.age,user1.company);
console.log(user2.name,user2.age,user2.company);
console.log(user3.name,user3.age,user3.company);


user1=user2;
console.log(user1); // user2 values will be printed for user1

user2=user3,
console.log(user2);// user3 values will be printed for user2

user3=user1,
console.log(user3);


