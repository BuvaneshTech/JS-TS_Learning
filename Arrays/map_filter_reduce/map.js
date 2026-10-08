// map is one of the most used method in array 

// it used to transform the array and return the new array it will not affect existing array


let marks = [88,99,55,44,66]

let newARRAY = marks.map((newValue)=>{

return newValue/2;

});

console.log(newARRAY);
console.log(marks);

 // This map function used to accept the return keyword thats the difference between for each and this map
 // for each does not accept return keyword

 // but map accepts return keyword and can be stroed in new Array

// example 2 

// Find the square root of all the values inside the array


let num = [2,3,7,8,9]


let output = num.map((numbers)=>{

return numbers*numbers;

})

console.log(output);  // [ 4, 9, 49, 64, 81 ]


// example 3

 // convert all the values to uppercase and append it with raja



 let names = ["Chola","Chera","pandyas","Buvanesh"];
 let newKings = names.map((updatedNames)=>{

return updatedNames.toUpperCase()+" "+'Raja';


 });
 console.log(newKings);


 