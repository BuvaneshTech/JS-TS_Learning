// If we always wantst only resolve in a function



function getdata(){


    let user = {
name:'Buvanesh'


    }
    return Promise.resolve(user);
}

getdata().then((result) => {
    console.log(result);
    
});



// what if we want only reject


function getError(){


    return new Promise.reject("505 server busy");
}

getError().catch((Error)=>{


    console.log(Error);
})


// interview question Use both resolve and reject in params but only it should rejcty in output


function  fetching(){


    return new Promise((resolve,reject)=>{

reject("Cannot fetch the details");

    })
}

fetching().catch((error)=>{

    console.log(error);
})

