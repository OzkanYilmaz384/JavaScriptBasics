let primitive = true;

let type = typeof(primitive);

switch (type) {
    case "number" :
        console.log("Number");
        break;
    case "string" :
        console.log("String");
        break;
    case "boolean" :
        console.log("Boolean");
        break;
    default :
    console.log("Please assign a value to 'primitive'");
}