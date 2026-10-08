// this keyword is the one which is used to call the current object




let user = {

name:"Buvanesh",
age:32,
company:"Infosys",

 getdetails(){


return [this.name,this.company];

}


}
console.log(user.getdetails());