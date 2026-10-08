// for of loops is generally used to iterate through arrays in simple manner 

// Homogeneous Array
let a = [75,99,258,25635,99];

for(let ele of a){

console.log(ele);
}

// heterogeneous Array

let b = ["Buvanesh", 88, "Ak",2195];
for(let element of b){

console.log(element);

}

 // Interview question print the number in reverse using for of loop


 let value = [500,800,900,555,478];


 let count = value.length-1;

 for(let ele of value){ // ele is variable declared
ele =count; // we found the highest index using formula length -1 and assigned it to ele
process.stdout.write(value[ele] + ' ,'); // first 478 will be printedd
// console.log(value[ele]);
count--; // then it get reduced and goes to 555 and it continues its execution

 }