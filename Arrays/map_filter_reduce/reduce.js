// reduce means combine everything into one value


let num = [10,20,30,40,50]

 // ouput = 150


 let newvalue = num.reduce((a,b)=>{
return a+b

 },0);
 console.log(newvalue);


 // I need to append a word infront of a array


 let nam = ["Hello,","world,","Buvanesh,", "is,", "a ,","King"];

 let newValues = nam.reduce((result,n)=>{

return result+n

 },"Kumarae ");4

console.log(newValues);