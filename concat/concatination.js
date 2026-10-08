// it ios like merging two variables based on data types

let x = 100;
let y = 200;
 
let a = "selenium";
let b = "playwright";

console.log(x+y); // 300
console.log(a+b);// seleniumplaywright
console.log(x+y+a+b); //300seleniumplaywright
console.log(a+b+x+y); // seleniumplaywright100200


//-------------------------*************-------------------------

console.log('5'-2);// 3 js automatically converts string 5 into number and we get output as 3
console.log('5'-'4');// 1  js automatically converts string 5 and 4 into number and we get output as 1
console.log('10'+1-1);  // 100 first 10 string will be concatinated with 1 and value will be 101 -1 = 100

console.log('2'-10); // -8

console.log('20'/"5"); // 4 

console.log(10*'2'); // 20 

console.log(10+'2'*5); // Bodmas will apply here 5*2 = 10 +10 = 20;