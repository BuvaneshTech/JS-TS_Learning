function getNumber(){
return new Promise ((resolve,reject)=>{

let number = true;
if(number){

resolve(101);
}
else{
    reject("Cannot find the number");
}

})

}


getNumber().then((Message)=>{
    console.log(Message);
}).catch((Error)=>{
    console.log(Error);
}).finally(()=>{
    console.log("Closing the connection");
});