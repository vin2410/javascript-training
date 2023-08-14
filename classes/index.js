// Parent class
class Motorbikes {
    constructor(brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
    print() {
        return (this.brand + " " + this.model + " " + this.price)
    }
}
// Child class
class Kawasaki extends Motorbikes {
    constructor(brand, model, price) {
        super(brand, model, price);
    }
}
// Child class
class Bmw extends Motorbikes {
    constructor(brand, model, price) {
        super(brand, model, price);
    }
}
// Child class
class Honda extends Motorbikes {
    constructor(brand, model, price) {
        super(brand, model, price);
    }
}

const Kawasakiz1000 = new Kawasaki("Kawasaki", "z model", "435tr");
const Bmws1000rr = new Bmw("BMW", "s model", "770tr");
const Cbr1000rrr = new Honda("Honda", "Cbr", "1ty");

console.log(Kawasakiz1000);
console.log(Bmws1000rr);
console.log(Cbr1000rrr);
console.log(Kawasakiz1000.print())
    
