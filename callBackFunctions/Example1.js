// passing a function as a parameter to a another function is known as Callback function



function greet(parameter){



console.log("hello Welcome to the world");
parameter();

}

function print(){


    console.log("Thanks for welcoming me");
}


greet(print);