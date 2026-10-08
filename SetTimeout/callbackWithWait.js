


// settimeout is a inbuilt function in Node js it will wait for sometime before calling the next method


//settimeout will accept two parameters 



function caller(callback){



console.log("Started executing");


setTimeout(() => {
    console.log("Settimeout");
    callback();
}, 5000);

}

caller((user)=>{

console.log('Callback function executing');


});