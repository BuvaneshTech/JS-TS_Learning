function print(callback){



console.log("getting user details wait for some time , connencting to database");



setTimeout(()=>{

let user={


    name:"Kishore King",
    age:32,
    company:'Infosys',
}

console.log(user);
callback()
},5000)
}


print(()=>{


console.log("User details are displayed connection is disconnected");

})