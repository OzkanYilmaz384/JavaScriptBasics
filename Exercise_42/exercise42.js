let user = {
    name: "Cosimo",
    age: 30,
    };
    
    let newUser = {}; // the new empty object
    
    // Copy all user properties into newUser
for (let key in user) {
    newUser[key] = user[key];
}

    newUser.name = "Paolo"; // changed name inside newUser
    
    console.log(newUser);
    console.log(user);