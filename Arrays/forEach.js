// or each is a array function  where it can be used to iterate through the values
 // return keyword will not work inside for each method

  // thats the disadvantage in foreach  method


let products = ["Keyboard",'laptop',"Worktable","chatger","screen"];

products.forEach((values)=>{

console.log(values);
// return values;


});

// output
// Keyboard
// laptop
// Worktable
// chatger
// screen



 // example2 find the sqaure root 

 let marks = [22,35,66,88,99];
 marks.forEach((newMarks)=>{
console.log(newMarks*newMarks);

 });

 console.log(marks); // [22,35,66,88,99];