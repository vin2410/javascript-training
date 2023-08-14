// function myDisplayer(some) {
//     document.getElementById("demo1").innerHTML = some;
// }

// function myFirst() {
//     myDisplayer("Hello");
// }

// function mySecond() {
//     myDisplayer("Goodbye");
// }

// mySecond();
// myFirst();

// Create an Array
const myNumbers = [4, 20, -7, -6, 0];

// Call removeNeg with a Callback
const posNumbers = removeNeg(myNumbers, (x) => x < 0);

// Display Result
document.getElementById("demo").innerHTML = posNumbers;

// Remove negative numbers
function removeNeg(numbers, callback) {
    const myArray = [];
    for (const x of numbers) {
        if (callback(x)) {
            myArray.push(x);
        }
    }
    return myArray;
}
