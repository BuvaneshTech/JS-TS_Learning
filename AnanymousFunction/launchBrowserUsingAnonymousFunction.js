/**
 * 
 * @param{String} browser
 * 
 */



// if we use return no need to add break in switch case 

// return act as a break 

let launch = function (browser){


switch(browser.trim().toLowerCase()){

case 'chrome':
    console.log('Chrome launched');
return true;
case 'Edge':
    console.log("Edge launched");
return true;

default:
    console.log("No browser found");

}

}

let output = launch('ChroME');

if(output){

console.log("navihgate to the URL");
}