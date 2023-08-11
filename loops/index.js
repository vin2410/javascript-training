// While loop
let list = ["a", "b", "c"];
let i = 0;
while (i < list.length) {
    console.log(i);
    i++;
    // if (somthingistrue) break
}
let list2 = ["a", "b", "c"];
i = 0;
do {
    console.log(list2[i]);
    i++;
} while (i < list2.length);

// for...of loop
const list3 = ["a", "b", "c"];
for (const value of list3) {
    console.log(value); //a,b,c
}
