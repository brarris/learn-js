// One-Dimensional array
const fruits = ["Apple", "Banana"];
const newLength = fruits.push("orange");
console.log(fruits); // [ 'Apple', 'Banana', 'orange' ]
console.log(newLength); // 3

const things = ["2.TV", "3.Window", "4.A dol"];
console.log(things); // [ '2.TV', '3.Window', '4.A dol' ]

let popMethod = things.pop();
console.log(popMethod); // 4.A dol
console.log(things); // [ '2.TV', '3.Window' ]

let unshiftMethod = things.unshift("1.Air Conditioner");
console.log(unshiftMethod); // 3
console.log(things); // [ '1.Air Conditioner', '2.TV', '3.Window' ]

// Two-Dimensional Array
let chessboard = [
  ["R", "N", "B", "Q", "K", "B", "N", "R"],
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  ["p", "p", "p", "p", "p", "p", "p", "p"],
  ["r", "n", "b", "q", "k", "b", "n", "r"],
];

console.log(chessboard[0][3]); // "Q"
console.log(chessboard[7][7]); // "r"

// Desctructuring Array
let str = ["a Cup", "Glass", "Plastic"];
let [first, second, third] = str;
console.log(first, second, third); // a Cup Glass Plastic
let [satu, , tiga] = str;
console.log(satu); // a Cup
console.log(tiga); // Plastic

let numbers = [1, 2, 3];
let [one, two, three, four = 4] = numbers;
console.log(one, two, three, four); // 1 2 3 4

let colors = ["red", "green", "blue", "brown"];
let [merah, , hijau, ...rest] = colors;
console.log(merah, hijau, rest); // red blue [ 'brown' ]

// Reverse String

let hitam = "black";
let charColors = hitam.split("");
console.log(charColors); // [ 'b', 'l', 'a', 'c', 'k' ]
charColors.reverse();
console.log(charColors); // [ 'k', 'c', 'a', 'l', 'b' ]
let reversedArray = ["k", "c", "a", "l", "b"];
let reservedString = reversedArray.join("");
console.log(reservedString); // kcalb
