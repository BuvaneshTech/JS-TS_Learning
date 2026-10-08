// passing a anonymous function as a  paramter



function medical(patient){


    console.log("I am a medical function");

    patient();
}



medical(()=>{

    console.log("Hello you are doing well");
});