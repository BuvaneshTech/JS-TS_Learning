// now we are in Example 2 file if we want to use the variables and methods in example 1 file we need to import it

// example 1 to import 
import {x,username,hello} from './Example1.js'  // this also an example of object destructuring



console.log(x);
console.log(username);
hello();



// example 2 to import 


import * as utilit from './Example1.js';

console.log(utilit.x);
console.log(utilit.username);
utilit.hello();