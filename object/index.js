function Smartphone(brand, model, ram) {
    this.brand = brand;
    this.model = model;
    this.ram = ram;
    this.fulldevice = function() {
        console.log(this.brand + " " + this.model + " " + this.ram);
    }
};
const vinh = new Smartphone('Samsung', 'Note20', '8gb')
const ps1 = new Smartphone('Iphone', '14 pro max', '6gb')
const ps2 = new Smartphone('Sony', '1 mark V', '16gb')

console.log(Smartphone);
// const vinh = {
//     brand: "Samsung",
//     model: "Note20",
//     ram: "8gb"
//     // start: function () {
//     //     console.log(`Started
//     //     ${this.brand} ${this.model}`);
//     // },
// };
// var person1 = {
//     brand: "Iphone",
//     model: "14 pro max",
//     ram: "6gb"
    // goTo: function(destination) {
    //     console.log(`Buy new one ${destination}`)
    // }
// };
// const person2 = {
//     brand: "Sony",
//     model: "1 mark V",
//     ram: "16gb"
// };

// othersmartphone.goTo()
vinh.fulldevice()
ps1.fulldevice()
ps2.fulldevice()
// const VinhSmartphone = new Smartphone("Samsung", "Note20");
// console.log(VinhSmartphone.model);
// const otherSmartphone = new Smartphone("Iphone", "13");
// console.log(otherSmartphone.brand);

// const car = {
//     color: 'blue',
//     'the color': 'blue'
// }
