class car{

start():void{

    console.log('Car started');
}
stop():void{

    console.log('car stopped');
}
refuelling():void{
    console.log('refuleling');
}

}

class BMW extends car{

override start():void{

    console.log("Bmw car started");
}

autoparking():void{


    console.log("BMW is Auto parking");
}


}

// creating a object of child class

let b:BMW = new BMW();
b.start(); //  it will call bmw start method parent will be overriden
b.stop();
b.refuelling();
b.autoparking();

// creating object of parent class

let C : car= new car();
C.start();
C.stop();
C.refuelling();
// C.autoparking(); // this will throw error because parent cant inherit property of the child


// Top casting means we can create object of child class and refered with parent ref variable


let c1:car = new BMW();
c1.refuelling(); // here also bmw start will be called not car start method because it is already overriden
c1.start();
c1.stop();
c1.refuelling();

// downcasting is not allowed in any programming languages for object 

// on the above line no 57 is BMW is a car 

// if we declared let b1:BMW = new car();  it will be like all the cars are BMW it snot allowed



