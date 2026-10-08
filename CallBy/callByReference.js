let user = {

name:'Buvanesh',
age:32,
company:"Infosys",
}
function getuserdetails(UserID){

console.log(UserID.name,UserID.age);

}


getuserdetails(user);


// on the above line we user as a paramater which is reference name of the object  thaths why it is called call by reference

