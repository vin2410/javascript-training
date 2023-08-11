// Array literal syntax
let a = [1, 2, 3];
// console.log(a);

// Array built-in function
a = Array.of(4, 5, 6);
// console.log(a);

// Matrix
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
// console.log(matrix[1][0]);

// Add an item
a.push(7, 8, 9);
// console.log(a);

// Add element at the beginning of array using unshift() and Remove with shift()
a.shift(4);
a.unshift(0);
console.log(a);
a.pop();
// console.log(a);

// Join two or more array
a = [1, 2];
let b = [3, 4];
let c = [5, 6];
console.log(a.concat(b, c));
console.log([...a, ...b]);

// Intialize a new array
console.log(Array(4).fill(0)); // 0,0,0,0,
