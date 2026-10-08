// a function which return heterogeneous values

// example 1
function getemployeeDetails():Array<String|number|boolean>{

    return[32,"Buva",true];
}

let output = getemployeeDetails();
console.log(output);


// example 2

function getdiffUser():Array<any>{


    return ["hello",55,true,"Hello","world"];
}

let out = getdiffUser();
console.log(out);

// always use example 1 because of declaring any there may some issue may occur what if user send true instead of string it may throw error

// so always example 1 with which datat type is correct


