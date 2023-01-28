const { StringDecoder } = require("string_decoder");

let hello = 'Ciao';     // number
let age = 18;       // boolean
let isGraduated = false;     // string


console.log(Number(hello));     // NaN : Not a Number
console.log(Boolean(age));
console.log(String(isGraduated));