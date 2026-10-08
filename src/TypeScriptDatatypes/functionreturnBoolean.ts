// a function which return true or false is known as boolean function

function launchBrowser(browsername:string):boolean{


let flag = true;
    
switch(browsername){

case'chrome':
console.log("Chrome Launched")
return true;
case'firefox':
console.log("Firefox launched");
return true;
default:
    console.log("no such browser");
    return false;

}
}

if(launchBrowser("chrome")){

console.log("Browser launched");

}