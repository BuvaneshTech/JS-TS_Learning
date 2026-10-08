// this method index of is used to fidn the index of the particular values inside the array



let names = ["buvanesh","kishore","Polly","gayle","braithwaite"];
let i = names.indexOf("Polly");
console.log(i);// 2 


// Example 2  if the interviewer asks us to find the index of 3 duplicates values inside the same array?


let values = [3,1,5,2,1,8,3,9,4,3,2];

let k = values.indexOf(3); // this will always return the first index of 3 so in output the index will be 0 
console.log(k); 

// to find the index if second duplicate value 3 

let secondduplicateIndex = values.indexOf(3,k+1);
console.log(secondduplicateIndex); // the output will be 6 

 //to find the index of 3 rd duplicate value

 let thirdDuplicateValue = values.indexOf(3,secondduplicateIndex+1);
 console.log(thirdDuplicateValue); // it will return 9


 