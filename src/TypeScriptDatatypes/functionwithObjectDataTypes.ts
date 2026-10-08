// 
// example 1 accept only 1  datat type as a  value  for a key

function  userDetails():{username:string;age:number;city:string;ispresent:boolean}{

return{
username:"Kishore",
age:32,
city:"chennai",
ispresent:true,
}

}

let output = userDetails();
console.log(output);


// example 2 accepts string or boolena or number as a value for 1 key

function  userDetails1():{username:string;age:number;city:string;ispresent:boolean|string|number}{

return{
username:"Kishore",
age:32,
city:"chennai",
ispresent:22,
}

}

let output1 = userDetails1();
console.log(output1.ispresent);

console.log(output1);


