// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
            console.log("February");
            break;
    case 3:
            console.log("March");
        break;
     case 4:
            console.log("April");
            break;
     case 5:
            console.log("May");
            break;
    default:
        console.log("default");
        break;
}
//if break is not used,then the all the codes after the matched code will get executed except default

const month1 = "mar"

switch (month1) {
    case "jan":
        console.log("January");
        break;
    case "feb":
            console.log("February");
            break;
    case "mar":
            console.log("March");
        break;
     case "apr":
            console.log("April");
            break;
     case "may":
            console.log("May");
            break;
    default:
        console.log("default");
        break;
}