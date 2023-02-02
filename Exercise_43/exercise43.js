let user = {
    name: "Cosimo",
    age: 30,
  };
  
function changeName (obj, key, val) {
    let copy = Object.assign({}, obj);
    copy[key] = val;
    return copy;
};

  let newUser = changeName (user, "name", "Paolo");
 
  console.log(newUser);
  console.log(user);