// slice method used to split the array into two and stored in new Array 
// 
// the existing array will not get affected hence it is known as 

// Immuttable arrays

// and its syntax is splice(StartIndex,expectedIndex-1)



 let names = ['Gayle','Polly','Bravo',"Braithwaite",'Roach',"Chnaderpaul"];


 console.log(names.indexOf("Braithwaite")); // it will return 3


 let newarray = names.slice(0,3);
 console.log(newarray); // [ 'Gayle', 'Polly', 'Bravo' ]
 console.log(names);  // [ 'Gayle', 'Polly', 'Bravo', 'Braithwaite', 'Roach', 'Chnaderpaul' ]


 // Example 2 

 //  if end index is not mentioned in the slice then it will take array length as a default value


 let brand = ["hyndai","honda","Suzuki","nissan","Renault"];

 let newBrand = brand.slice(1);
 console.log(newBrand); // ["honda","Suzuki","nissan","Renault"]


 // Example 3 / in slice method negative indexing is also allowed

 let values = [1,8,99,55,44]

let newvalues = values.slice(-2);
console.log(newvalues); // [55,44]


 // Example 4 // 

 let obj = ["Keyboard","mouse","Laptop","Mobile","Charger"];
 let newObj = obj.slice(-3,-1);
 console.log(newObj); // [ 'Laptop', 'Mobile' ]
