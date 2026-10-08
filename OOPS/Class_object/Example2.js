//what is static keyword in JS

// for example in a company there are lot of employees with diff name age and diff salary

// but for all of them who is paying the company so company is static

// another example

// you are doing course for playwright with some learners around 50 peoples 

// but for all this 50 peoples only one trainer and he is known as naveen so naveen is static



class Upskilling {

    name;
    age;
    course;

    static trainerName = "navenn";

    constructor(name, age, course) {

        this.name = name;
        this.age = age;
        this.course = course;

    }

    details() {

        console.log("Student 1 details are ", this.name, this.age, this.course);
    }

static playing(){
    console.log('we are playing in class as well with JS');
}

}


let stu = new Upskilling("Kishore",32,"Playwright");
stu.details();


console.log(stu.trainerName)// this will throw undefined

// because a function or avriable stored with static will not be in heap memory it will be CMS (Common memory space)

//so we need to access it using class name\

console.log(Upskilling.trainerName);
Upskilling.playing();


