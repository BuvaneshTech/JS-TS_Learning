// This will thorw error because one class can extend one class only so multiple inheritance is not allowed

// but it can be achieved via interface



class truck{

loading():void{


    console.log("truck is loaded");
}

}

class vehicle{

    started():void{
        console.log("Vehicle started");
    }
}

class car extends truck,vehicle{


console.log("This will thorw error because one class can extend one class only so multiple inheritance is not allowed");


}