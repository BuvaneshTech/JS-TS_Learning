// objects are the one in Js used to stroe values in Key and Value pair

// all the objects will be stiored in Heap memory


// objects are always defined inside flower brackets {}

let user = {

name:"Kishore",
ID : 2822455,
company:'Infosys'

}

console.log(user);

// to iterate through every object we can use for in loops

// in for in loops we use square notaion to get the values 

for(let e in user){

console.log(e ,':',user[e]);


}

// to get values we generally use . dor notation

console.log(user.ID);
console.log(user.company);


