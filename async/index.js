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

// Callback
function myfunction(param) {
    if (typeof param === "function") {
        param("Hoc callback");
    }
}

function mycallback(value) {
    console.log("Value: ", value);
}

myfunction(mycallback);

//
async function fetchData() {
    try {
        const response = await // await the promise to resolve
        fetch("https://api.example.com/data");
        // await another promise to resolve
        const data = await response.json();
        console.log(data); // do something with the data
    } catch (error) {
        console.error(error); // handle any errors
    }
}
