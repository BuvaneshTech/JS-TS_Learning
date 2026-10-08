function getApi(){

    console.log("My status code will be 200 or 201");
}
function post(){

    console.log("I am a post API my status code will also be 200 or 201");
}

function put(){


    console.log("I am a put API");
}

function deleteAPI(){

    console.log("I am a Delete API");
}


function perform(callback){


console.log("Performing API Actions");
callback();
}

perform(post);