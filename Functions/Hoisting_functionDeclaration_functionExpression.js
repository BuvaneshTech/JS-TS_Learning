// hoisting will work for below while calling the function before the function declared


callmebuva();

 namedfunctionexpression();


function callmebuva(){


    console.log("hoisting will work for function declaration");
}



let namedfunctionexpression  = function getuseeeeeeeeebbbbbbbbbb(){



    console.log("Hositing will not work for named function expression");

//      c:\naveen_Automation_javascript\Functions\tempCodeRunnerFile.js:6
// namedfunctionexpression();
// ^

// ReferenceError: Cannot access 'namedfunctionexpression' before initialization
}

// so if  we call it after declarion it will work


// namedfunctionexpression();