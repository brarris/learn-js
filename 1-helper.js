// Memanggil atau meng ekspor ES Module yang dari helper.js ke reviews.js

// ------ Cara ke-1 -----
function hello() {
  console.log("Hello");
}

export default hello;
// ----- Cara ke-1 -----

// ----- Cara ke-2 -----
export function helloWorld() {
  console.log("Hello World");
} // export nya ada pada file reviews.js
// ----- Cara ke-2 -----
