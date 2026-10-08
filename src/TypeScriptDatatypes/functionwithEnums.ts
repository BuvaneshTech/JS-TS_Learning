// enums are the one which always return fixed values

// example 1
enum statusofJira{

    open,
    reviewd,
    closed,
    reopened,
    rechecked,
    againclosed,
}
console.log(statusofJira);

// it will return below with index values

// [Running] npx tsx "c:\naveen_Automation_TypeScript\src\TypeScriptDatatypes\tempCodeRunnerFile.ts"
// {
//   '0': 'open',
//   '1': 'reviewd',
//   '2': 'closed',
//   '3': 'reopened',
//   '4': 'rechecked',
//   '5': 'againclosed',
//   open: 0,
//   reviewd: 1,
//   closed: 2,
//   reopened: 3,
//   rechecked: 4,
//   againclosed: 5
// }


// example 2

enum Browser{

    ch = "chrome",
    ff = 'firefox',
    ed = 'edge',
    sf = 'safari'
}


function launcBrowser(browser:string):boolean{

let flag = true;
switch(browser){

case Browser.ch:
console.log("Chrome launched");
return true;

case Browser.ff:
    console.log("firefox launched");
    return true;
default:
    console.log("No such browser");
    return false;

}

}

launcBrowser("firefox");

