async function getdata(element:string):Promise<string|number>{

return new Promise((resolve,reject)=>{

let flag = true;
if(flag){
resolve ("Clicked on elemnt"+" "+element);
}
else{

    reject (404);
}

})


}


async function main(){
 let out = await getdata("Hello");
 console.log(out);
}

 main();