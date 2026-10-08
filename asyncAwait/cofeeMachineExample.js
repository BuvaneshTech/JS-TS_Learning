


function startMachine() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("machine Started");
            resolve();
        }, 3000)
    })
}

function boilWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Boiling the water");
            resolve();
        }, 4000)
    })
}

function addCofeePowder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Cofee powder Added");
            resolve();
        }, 5000)
    })

}

function placeTheCup() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Cofee Cup Placed");
                resolve();
            }, 6000)
        })
    }

function dispenseTheCofee() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("Take the Coffee");
            resolve();
        }, 7000)
    })

}



async function makeTheCofee(){

await startMachine();
await boilWater();
await addCofeePowder();
await placeTheCup();
await dispenseTheCofee();
console.log("Enjoy your Cofee");

}


await makeTheCofee();