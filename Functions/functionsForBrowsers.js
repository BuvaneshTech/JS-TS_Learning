function launchbrowser(browserName){


    switch (browserName.trim().toLowerCase()){

case 'chrome':
    console.log("Chrome launched");
return true;
    case 'Edge':
        console.log("edge launched");
return true;
        case 'Firefox':
            console.log("FF launched");

default:
    console.log("No browser available");
return false;

}
}
let values = launchbrowser("Chrome");
console.log(values); 


if(values){
console.log("Browser launched successfully");


}