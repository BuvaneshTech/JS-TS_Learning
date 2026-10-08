async function getNumber(){

return 100;

}

let output = getNumber();
console.log(output); //  Promise { 100 }

// the abve will return promise{100}


// our expectation is to print only 100 but it will print like promise {100};

// Because it return promise you can hover on getNumber and see it will show promise with number

// we can getv our expected output with 2 ways 

// First way

getNumber().then((output)=>console.log("First Way", output)); // 100 

// the above will return only 100

// Second way  we can use await 


let value = await getNumber();

console.log("Second Way", value);

// so the Second wway will be much useful for us instead of writing the big lines



