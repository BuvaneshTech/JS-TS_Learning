

// literals or value types which accepts certain values



let httpscode:200|400|500;


httpscode = 800; // this throws a warning 

httpscode = 200; // this does not throws an warning


function getvalues():string|number{


if(true){
return 200

}
else{

    return ("bye");
}
}

let out = getvalues();
console.log(out);

