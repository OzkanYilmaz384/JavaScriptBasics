const password = 'Hi5';

let passwordLength = password.length;
let message;

if (passwordLength >= 4 && passwordLength <= 6) {
    message = `Password length is correct`
} else {
    message = `Password not valid`
}

console.log("Password length is " + passwordLength);
console.log(message);