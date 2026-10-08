// in object when we want to declare the types it will be taking too much time 

// for object which has only 4 key and values we can declare the types 

// what if the object has more than 20 key and values we can declare it type but code will look messy 

// so to avoid that in typescript we have types and interfaces



// Example 1 for object with its datatypes


let obj1:{username?:string,age:number,salary:number,isactive:boolean,companyName:string,companyID:number,companyAddress:string}={
age:32,salary:50000,isactive:true,companyName:'Infosys',companyID:22456,companyAddress:'5lkjhgh'};


// in example 1 you can see the key and its datatypes it s too lengthy and confusing so we will declare the same example with types
// we can use ? next to the key so it is not mandatory to be defined its becomes optional


// example 2 
type employee={
username?:string,
age:number,
salary:number,
isactive:boolean,
companyName:string,
companyID:number,
companyAddress:string
}

let exampleType:employee={

    age:32,
    salary:50000,
    isactive:true,
    companyName:'Infosys',
    companyID:32566,
    companyAddress:'No 88 greens road',
}

console.log(exampleType);

let exampletype2:employee = {

    username:'Buvanesh',
 age:32,
    salary:50000,
    isactive:true,
    companyName:'Infosys',
    companyID:32566,
    companyAddress:'No 88 greens road',
}
console.log(exampletype2);


// in example 2 we have created 2 objects using one type this is the advantage of type 

// we can use & operator in type as well to merge two types


// example 3 using & in two type



type company = {

    companyName:string
}

type person = company&{

    personname:string,
    persongender:string
}

let example3:person = {

companyName:'Infosys',
personname : 'Buva',
persongender:'Male'

}

console.log(example3);

// but using & in type is not much recomended in our framework so we can go with interfaces