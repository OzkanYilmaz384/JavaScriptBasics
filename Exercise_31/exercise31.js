function sayHelloName (callback) {
    console.log("Hello")
    callback();
}

function printName () {
    console.log("Ozkan Yilmaz");
}

sayHelloName(printName);