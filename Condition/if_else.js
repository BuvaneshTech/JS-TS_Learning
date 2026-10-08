

let age = 10;

if(age>=18){
console.log(`Eligible to vote`);

}
else{
    console.log(`not eligible`);
}


// there is a drawback in if  if if else if

// for the below code Chrome launched will br printed and no browser will also printed thats the drawback in if if if else condition it 

// it used to check all the lines so performance may decrease here


let browser = "IE";

if(browser =='Chrome'){
    console.log("Chrome launched");

}
if(browser =='Edge'){
    console.log("Edge launched");

}
if(browser =='Brave'){
    console.log("Brave launched");

}
if(browser =='safari'){
    console.log("safari launched");

}
else{

    console.log("No browser available");
}

// run it in debug mode and see it will check all the lines