class engine{

v8():void{


    console.log("I am the powerful engine");
}


}

class car extends engine{


car():void{

    console.log("i am car class inheriting the engine class");
}

}

class bmw extends car{

autoparking():void{
    console.log("I have an auto aprking option");
}

}


// the above is multi level inheritance


let b:bmw = new bmw();

b.autoparking();
b.car();
b.v8();