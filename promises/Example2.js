// promise with functiuon





function getuserDetails(userID){


return new Promise((resolve,reject)=>{

console.log("getting user deatils",userID);


console.log("Connecting to database");

setTimeout(() => {

    if(userID<=0){

reject("No User Data available");

    }
    else{
let user={


    name:"Buvanesh",
    age:32,
    company:"Infosys",
}
console.log("user Data found");
resolve(user);

    }
}, 5000);







})




}

getuserDetails(0).then((Message)=>{


    console.log(Message);
}).catch((Message)=>{


    console.log(Message);
}).finally(()=>{


    console.log("Closing the connecting with database");
}
)