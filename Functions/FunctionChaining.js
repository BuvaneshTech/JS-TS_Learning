// a function calling anaother function is known as function chaining



function login(){

console.log("Logged in Successfull");

search();

}

function search(){

console.log("Search successfull");

addtoCart();

}

function addtoCart(){

console.log("Added to cart");

logout();
}
function logout(){

    console.log("Logged out successfully");
}


login();


// once we start running the program all the functions will be stored in heap memory

// and the line no 33 login calling function will go to stack memory 

// on top of it it will call search() function in stack memory

// and add to cart function will be called on top of search function

// and logout will be called in stack on top of  add to cart 

// this is called memory allocation once execution is done deseriallization will start

// first it will remove logout , then add to cart , then search then login

// this is known as LIFO method


// So there is no Garbage collection in stack memory it follows LIFO method when ever porgram is running 

// it will allocate memory and deallocate memory using LIFO method



