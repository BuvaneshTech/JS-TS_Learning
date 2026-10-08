// the below works fine when compared to only if else but it also has performance issue


let browser = "Edge";

if(browser == "Chrome"){

console.log("Chrome launched");
}
else if(browser == "Firefox"){
    console.log("Firefox launched");

}
else if(browser == "Brave"){
    console.log("Brave launched");

}
else if(browser == "IE"){
    console.log("IE launched");

}
else if(browser == "Edge"){
    console.log("Edge launched");

}
else{
    console.log("Browser not availabe");
}

// the preformance issue in thew code is it checks every line and only print the output

// run it in debug mode and see it will check all the lines