function Smartphone (brand, name, price) {
    this.brand = brand;
    this.name = name;
    this.price = price;
}

const phone1 = new Smartphone("Iphone", "14 S", 2000);
let phone2 = new Smartphone("Samsung", "S 22", 1200);
console.log(phone1);
console.log(phone2);