// splice is the method which used to remove or replace the value from the middle of the array


// syntax for splice is  splice(startIndex,DeleteCount,replacevalue)

//Example 1

let city = ["Chennai","bangalore","Pune","Mumbai","Lucknow","Delhi"];

city.splice(1,1,"Maharastra");


console.log(city);

//  in line no 10 inside splice method first 1 refers to index so in 1st index banglore is there and again we gave 1 that referes to delete count
// and we gave Maharastra thats will replce banglaore to maharastra 


// Example 2

let numbers = [1,4,9,6,5]
numbers.splice(0,2,88);
console.log(numbers);


// on the line no 22 we gave 0 as start index and delete coutn as 2 , so in o index we have value 1 and we gave delete count to 2
// so it will remove 0 and 1st index values and replace it with 88


// Example3

let bikes = ["Pulsar","Apache","TVS","Ather"];
bikes.splice(1,bikes.length);
console.log(bikes);

// in line nom 33 we gave start inex as 1 so it will start from Apache , and 
// and in delete count we gave bikes.length so the bike.length = 4
// so starting from 1 st index it will remove the remaining only 0  index value (pulsar) will be there

