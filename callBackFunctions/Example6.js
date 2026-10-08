function getuserDetails(callback1,user){


console.log("Fetching user details", user);

callback1(user);

}

getuserDetails((user1)=>{

    console.log('Hello user');
},{name:"Kishore",age:45})