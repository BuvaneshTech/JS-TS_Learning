function getuser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let user = {
                name: "Buvanesh",
                age: 32
            }
            resolve(user);
        }, 3000);

    })

}

getuser().then((Message)=>console.log(Message));


// in the above function we havent used async keyword but still it is considered as async funtion

// because inside that method we use promise so by default it will be async method

// so instead of line no 15 we can use await to print the output in easy way

let value1 = await getuser();
console.log(value1);
console.log(value1.name,value1.age);