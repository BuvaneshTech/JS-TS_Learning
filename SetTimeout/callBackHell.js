// call back hell is also known as pyramid of dome

// it is odlconcept in JS but in Modern JS it is not used 

// the main disadvantage is it will be hard to degbug

// lets see it with coffee machine example


function startMachine(callback){

setTimeout(()=>{
    console.log("Cofee machine started");


callback();


},3000)

}

function boilthewater(callback){


setTimeout(() => {
    console.log("Boiling the water");

    callback();
    
}, 3000);

}
function addCofeePowder(callback){
setTimeout(()=>{
        console.log("Adding cofee Powder");

callback();


},2000)


}

function placetheCup(callback){

setTimeout(()=>{

console.log("Place the cup");

callback();
},2000)

}

function CofeeReady(callback){

setTimeout(() => {

        console.log('Your cofee is ready');

    callback();
    
}, 2000);
}



// the below is the one known as Call back hell which will be hard to decode and in future if any function is added in between 
// executing the function will be tough to avoid these Promises async and await are introduced in modern JS
startMachine(()=>{

boilthewater(()=>{

    addCofeePowder(()=>{

        placetheCup(()=>{
CofeeReady(()=>{


    console.log('Enjoy your cofee');
})

        })



    })


})

})