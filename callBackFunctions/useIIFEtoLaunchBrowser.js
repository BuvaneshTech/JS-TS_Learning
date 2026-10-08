/**
 * 
 * @param{string} browsername
 * 
 * 
 */



let browser = (function(browsername){

switch(browsername.trim().toLowerCase()){

case'chrome':
console.log("Chrome launched");
return true;
case"Edge":
console.log("Edge Launched");
return true;
case "Firefox":
    console.log('Firefox launched');
    return true;

    default:
        console.log('No such browser');
        return false;

}
})("Chromium");










if(browser){

console.log("launching the URL");


}