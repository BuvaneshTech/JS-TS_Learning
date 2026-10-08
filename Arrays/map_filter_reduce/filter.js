// filter is alos one of the main method used in array where filter also return new values and stores
//  in new array it will not affect existing array

// but the length of the values stored in new array may change or it will be same based on the condition




// Example 1;  print the numbers which are greater than 40


let value = [22,55,99,44,33,66,20,10];

let l1 = value.filter((greaterThat40)=>{

return greaterThat40>40;


});


console.log(l1); // [ 55, 99, 44, 66 ]


//Example 2 should return an empty array as well



let bob = [22,5,9,55,6,10,8,6];
let out = bob.filter((lessthan5)=>{



    return lessthan5<5;
});


console.log(out); // [];

// example 3  print even and odd nUmbers


let numers = [2,3,9,5,4,6,7,8];

let evenNumber = numers.filter((even,odd)=>{

return even%2==0;

});
console.log(evenNumber);

let oddNumbers = numers.filter((odd)=>{

return odd%2==1;

});

console.log(oddNumbers);


// example 4  Flter the student names whose name is more than 5 words


let studentNames = ["kishore",'rohith',"Buva","Virat","Sachin","Tom","Jerry"];


let newNames = studentNames.filter((out)=>{



return out.length>5

});

console.log(newNames);


// example 5 print the names which only has kings in it


let names = ['Pandyan King',"Cholan King","Cheran King","Buvanesh raja","Kishore Raja","gayle"];
let onlyLKings = names.filter((Kings)=>{

return Kings.includes("King");

});

console.log(onlyLKings);


// example 6 

//  filter 1 starting with apple 

// filter 2 print only where iph

// op => apple iph should be apple iphone


let products = ["apple mackbook","apple Iph","cannon","Camera","apple Monitor"];

/*
*
*
* @params {change} string
*
* 
*/

let outputs = products
.filter((onlyApple)=>{
return onlyApple.startsWith("apple")})
.filter((has)=>{
return has.includes("apple Iph")})
.map((change)=>{

return change.replace("Iph","Iphone");

})
console.log(outputs);