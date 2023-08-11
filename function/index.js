function present() {
    console.log("hi my name is Vinh");
}
present();

function getData() {
    return ["Vinh", 21];
}
let [name, age] = getData();
console.log(name, age);

//Use arrow function
let greeting = (name) => {
    console.log(`Hello, my name is ${name}`);
};

greeting("Vinh"); // Hello, my name is Vinh

const a = () => "test";
console.log(a); //test
