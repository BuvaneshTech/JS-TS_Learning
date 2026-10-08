// promises are the one which has 3 stages pending resolve , reject

// promises are the inbuilt object in JS

// So we will see a example with ordering pizza

// in promises we used to supply two paramters which will be the first one always be resolved and second will be rejected

// the paramters name can be anything but for our understnading we are giving resolved and rejected it can be a, b x,y ,



let output = new Promise((resolve,reject)=>{



let success  = false;

if(success){

resolve("Your pizza is Out for delivery");
}
else{

    reject("Your order is cancelled");
}


})

output.then((result)=>{

    console.log(result);
console.log("Your order is on the way");

}).catch((Error)=>{

console.log(Error);
console.log("Sorry for the inconvenience");


}).finally(()=>{
    console.log("Thanks for your time bye cheers");
})