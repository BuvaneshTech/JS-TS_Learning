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

    login();
}


login();


// this will throw stack overflow error or Maximum range error

// once we start running the program all the functions will be stored in heap memory

// and the line no 35 login calling function will go to stack memory 

// on top of it it will call search() function in stack memory

// and add to cart function will be called on top of search function

// and logout will be called in stack on top of  add to cart 

// again it will call login 

// so it keeps on buildiong and the memory will be full and maximum range error will be thrown