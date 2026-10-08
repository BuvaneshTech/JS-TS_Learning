// passing a functuion with its named expression



function welcome(beautiful){


    console.log("Werlcome to the world");

    beautiful();
}


let greet = function(){

console.log("i am a named function expression");


}


welcome(greet);

// example 4

let wish = ()=>{


    console.log("I wished her");
}

welcome(wish);