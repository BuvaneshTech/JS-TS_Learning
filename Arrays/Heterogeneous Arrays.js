// Heterogeneous arrays are the one which can store  multiple data types in it 




let studentDetails = ["Buvanesh",20339700,true,140000.258];

// let b = 45;
console.log(studentDetails);
console.log(studentDetails[0]);
console.log(studentDetails[3]);
console.log('The length is',studentDetails.length);
console.log(typeof studentDetails);

// As we said JS is Dynamic i am going to add values in studentDetails

studentDetails[10] = "Kishore";
console.log(studentDetails[8]);// undefined
console.log(studentDetails[10]);
console.log(studentDetails); // [ 'Buvanesh', 20339700, true, 140000.258, <6 empty items>, 'Kishore' ]

// now we can replace the values inside the Array index

studentDetails[0] = "Javascript";
console.log(studentDetails);

 // does Arrays accepts negative index what will happen if we assign the value in -1

// arrays never accepts negative index 

let b = [88,66,99];

b[-1] = "Buvanesh"
console.log(b);

// the array will be convert it to properties with key and value where the -ve index will be key and assigned value will value

