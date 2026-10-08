// what will happen if we try to iterate the array using for in Loop


// for in loop will print the indexes of the array it will not print the values

// for off loops will print the values of the array


let a = [10,20,55,999,1000];

for(let ele in a){

console.log(ele);// 0 1 2 3 4 
console.log(a[ele]);
}


// thats why for in loops are used to iterate throught objects


let details = {
name:'Buvanesh',
salary:140000,
rollno:20339700,

};
console.log(details); // { name: 'Buvanesh', salary: 140000, rollno: 20339700 }


for(let b in details){

console.log(b); // this will print only keys
console.log(details[b]);

}