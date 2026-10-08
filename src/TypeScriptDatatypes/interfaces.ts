// when we have type then why we need to use interfaces

// the main advantage in using interface is we can extend it to another interface 


// example 1 
interface one{

username:string,
age:number,
salary:number,


}

interface two extends one{

usernametwo:string,
userAge:number

}


let inf:two={

username:'Kishore',
usernametwo:'Buvan',
age:32,
salary:50000,
userAge:33,

}


console.log(inf);

// example 2


interface car{

carName:string

}
interface model{

    carModel:String
}

interface bmw extends car,model{

bmwPrice:number,
bmwseries:string


}


let customer:bmw={


    carName:'Barweriagn Motor works',
    carModel:'Sedan',
    bmwPrice:340000,
    bmwseries:'630l'
}

console.log(customer);

// this is the advantage of interface we can  use extend but in type we can use extend , we can use & operator but not recomended 

// always go with interface


