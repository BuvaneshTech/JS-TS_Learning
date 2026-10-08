function objectfunction(username){



let userdata = null;


if (username === "buvanesh"){

    userdata = { 
    
    name:'Buvanesh',
    age:32,
    country:"India",
}
}
else if(username === 'Kishore'){

userdata = {

    name:'Kishore',
    age:32,
    country:"USA",
}

}
else {

   return "No user found";
}

return userdata;

}



let value = objectfunction("bbuvanesh");
console.log(value);