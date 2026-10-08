// a function never is not almost used but it is compuilsory to learn

// never can be used in Throw function where we want to throw an error or in infinite loop method

// Once we called the never function what are all the codes written after it will not execute

// line number 16 and 17 will not work when we click on run button because a never function is before it


// function usingNever():never{


//     throw new Error("element not found");
// }

// usingNever();

// let x = 45;
// console.log(x);



// what if we missed to mention never in a infinite loop function


function infiniteloop(){


    while(true){

        console.log("Printing");
    }
}

infiniteloop();


let x = 88;
console.log(x);


// on the above line no 26 we havent mentioned never keyword so line no 38 and 39 is not hiiden

//  so user thinks this is a correct function and executed it but for saftey purpose if we mention never it wiull not allow to 

// write the line 38 and 39 if wrote also it will be blurred

