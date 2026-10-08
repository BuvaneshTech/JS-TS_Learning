// tuple in TS is completely Different from python


// tuple in Ts is concept not a keyword

// tuple is also like array but it is fixed in size and order cannot be replaced like in a tuple the 1st value is mentioned as string means

// we have to enter string value not a number or boolean value


function getdata():[String,number,boolean]{

return ["buvanesh",21,true]

}
let output = getdata();
console.log(output);

output[0] = "Kishore";
console.log(output);

output[1] = true; // this throws an error because we must pass number

