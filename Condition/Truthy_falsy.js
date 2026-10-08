// js has truthy and falsy in JS which is applicable only for if else statement it will not work for any other conditions


// falsy values

// false
// 0
//-0
// 0 n -> big integer values
//""empty strings
// null
// undefined
//NaN


// -------------------------*******************Falsy values*****************_________________________
// 0
if(0){
console.log(true);

}
else{
    console.log(false);
}


// -0
if(-0){
console.log(true);

}
else{
    console.log(false);
}

//null

if(false){
console.log(true);

}
else{
    console.log(false);
}

//undefined
if(null){
console.log(true);

}
else{
    console.log(false);
}


// false
if(false){
console.log(true);

}
else{
    console.log(false);
}


//NaN
if(NaN){
console.log(true);

}
else{
    console.log(false);
}

// "" empty string

if(""){
console.log(True);
}
else{

    console.log("False");
}

// _____________________**********************Truthy values*****************_____________________________

// other than 8 falsy values everything will be true

if(5){
    console.log(true);
}
else{
    console.log(false);
}

if(" "){ // its not empty string there is a space in condition

console.log(true);
}
else{
    console.log(false);
}

if(1){ 

console.log(true);
}
else{
    console.log(false);
}