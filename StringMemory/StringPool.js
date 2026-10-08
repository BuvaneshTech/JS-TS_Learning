 // whenever we assign a value as a string it will be stored inside String constant pool memory which will be inside heasp memory



let a = "Buvanesh";
let b = "Buvanesh";

console.log(a);
console.log(b);

 //  so for the above 2 buvanesh will not be created in SCP only one buvanesh will be created 

 // and two a and b will be created in Stack and both will be pointed to Buvanesh value inside SCP


  // Why only for String we have this special memory means 90 % of websited use string a lot compared to other data types

  // for example check amazon flipkart facebook all will have string values a lot when compared to other data types

// if there is a slight change in value or defined same name defined in lower case new v alue will be created in SCP

