/* Print in the console the price of the room according to the following scheme:

* Prince for Basic Room --> 50€
* Price for Junior Suite Room --> 80€
* Price for Master Suite  --> 100€ */

let room = "Master Suite Room";
let price;

switch (room) {
    case "Basic Room" :
        price = "50€"
        console.log("Price for " + room + " : " + price);
        break;
    case "Junior Suite Room" :
        price = "80€"
        console.log("Price for " + room + " : " + price);
        break;
    case "Master Suite Room" :
        price = "100€"
        console.log("Price for " + room + " : " + price);
        break;
    default :
        console.log("We have three kind of rooms. Please choose one of them!")
        break;
}