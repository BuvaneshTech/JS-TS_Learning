
let browser = "Groom";

switch(browser){
case 'Chrome':
    console.log("Chrome launched");
break;
case "safari":
    console.log("Safari lauched");
    break;
case "Edge":
    console.log("Edge launched");
    break;

    default:
        console.log("No browser available");
        break;

}


// interview quetion = > a e i o u  write a logic else print consonant

let ch = 'a';

switch(ch){

case "a":
    case 'e':
        case 'i':
            case 'o':
                case 'u':
                    console.log("Vowels");
                    break;
default:
    console.log("Its a consonant");
    break;
}



// switch case interview question 

// print aeiou is a vowel else a constant

let word = 'V';

switch(word){

case 'a':
case 'e':
case 'i':
case 'o':
case 'u':
    console.log("Its a vowel");
    break;
default:
    console.log("Its a consonant");
    break;


}