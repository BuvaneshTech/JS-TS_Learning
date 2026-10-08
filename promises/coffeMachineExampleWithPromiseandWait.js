function startMachine() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log('machine Started');
            resolve();
        }, 3000)
    })

}

function addWaterandBoil() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Added water and Boiling it");
            resolve();
        }, 3000)

    })
}

function placetheCup() {

    return new Promise((resolve, reject) => {

        console.log("Cup is placed");
        resolve();

    }, 4000)


}
function cofeeReady() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("your cofee is ready");
            resolve();
        }, 5000)
    })


}



startMachine()
.then(()=>addWaterandBoil())
.then(()=>placetheCup())
.then(()=>cofeeReady())