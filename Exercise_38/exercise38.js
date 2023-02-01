function printName () {
    
    let helloName = "Hello John";
    
    setTimeout (function inner () {
        console.log(helloName);
    }, 1000);   
}

printName ();