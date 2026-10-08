// a class is known as a blue print

// for example car is a class 

// and Inside car there are different types like front wheel drive, backwheel drive, Suv, Sedan these are all objects4

// we cant use let var, const inside a class
 // we cant give function keyword inside class

 // named function expression can be used 


// what is the syntax used inside constructor for this keyword


// this.global = local

class Student{


    // delcaring global variables
name;
age;
isPresent;

// created a constructor 
constructor(name,age,isPresent){
    this.name = name;
    this.age = age;
    this.isPresent = isPresent;

}

// creating the actions 


coding(){

console.log(this.name,"I am a coding function");
}


 newfunction = function(){

console.log(this.name,"i ama named Function expression");
}


namedExpression = ()=>{
console.log(this.name,"i am a namedExpression");

}

}

// creating a object;

let obj1 = new Student("Buvanesh",32,true);
obj1.coding();
obj1.newfunction();
obj1.namedExpression();

console.log("________*********___________");
let obj2 = new Student("Kishore",29,false);
obj2.coding();
obj2.newfunction();
obj2.namedExpression();