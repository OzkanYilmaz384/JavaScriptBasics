/*
function canPlay() {
    let sport = " Football";
    

    if (true) {
      let personName = "Cosimo";        // personName is defined within "if statement" with 'let'.
    }                                   // So, it's not defined outside the if statement. 
                                        // 1- We can put "console.log(personName + sport)" inside if statement, OR
    console.log(personName + sport);    // 2 - We can define personName with 'var' inside if statement.
  }          
canPlay(); */

/*
// put "console.log(personName + sport)" inside if statement
function canPlay() {
    let sport = " Football";
    

    if (true) {
      let personName = "Cosimo";  
      console.log(personName + sport);       
    }                                                                  
  } 
  canPlay(); */


//define personName with 'var' inside if statement
function canPlay() {
    let sport = " Football";
    
    if (true) {
      var personName = "Cosimo";        
    }  
    console.log(personName + sport);                                                                 
  }

  canPlay();
  