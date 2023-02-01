let sport = " Football";  //global scope

function canPlay() {
    
    if (true) {
    var personName = "Cosimo";
    }
    // We can define personName with 'var' instead of 'let' or 
    // we can move the "console.log(personName + sport)" inside if statement to solve the problem.
    console.log(personName + sport);
    }
    
    canPlay();