function finding(callback1,callback2,num){


console.log("Executing function method");
callback1(num);
callback2(num);
console.log(num);

}

function coding(num){


console.log("Coding executed"+" "+num);

}
function writing(num){

console.log("Writing executed"+" "+num);

}


finding(coding,writing,300);