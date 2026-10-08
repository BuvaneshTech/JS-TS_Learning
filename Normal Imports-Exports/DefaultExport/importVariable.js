
// //Example 1 importing
// import buvan,{ trueKing } from "./defaultVariable.js";


// console.log(buvan);
// trueKing();



// Example 2 inmporting

// what if there is lot of function needs to be impoorted so inside import {} onbject destructing we cant keep on giving names what are all needs 

// to be imported what if it goes more than 50 instead of writing all the names we can give * and give one name to it like below

// import * as myutility from './defaultvariable.js';\

// if * is used no need to use {}




import buvan, * as myutil from './defaultVariable.js';

console.log( myutil.trueKing());


