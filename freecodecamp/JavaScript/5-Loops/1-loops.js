// How do loops and iteration work in JavaScript? & How Does the For...of Loop Work, and When Should You Use It?

// note: https://docs.google.com/document/d/1TOMMh99BA6kU_GWzERT7-_tHDBtG5QEtrAUiQmH-3uQ/edit?usp=sharing

// for(initialization; condition; increment or decrement) {
//  code block to be executed
// }
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// 0 1 2 3 4
console.log("-------------------");

{
  // a `for..of` loop is used when you need to loop over values from an iterable. Example of iterables would be arrays, and strings.
  /**
   * basic syntax:
   * for (variable of iterable) {
   *    code block to be executed
   * }
   */
  const numbers = [1, 2, 3, 4, 5];
  for (const num of numbers) {
    console.log(num); // 1 2 3 4 5
  }
  console.log("----------");

  // Here is another example where we have a string and we want to loop over each character and log it to the console.
  // It is important to note that you can use let, or const when declaring the variable in a for...of loop.
  const str = "freeCodeCamp";
  for (let char of str) {
    console.log(char);
  } // f r e e c o d e c a m p
  console.log("----------");

  // Here is an example of using const that results in an error
  const nomor = [1, 2, 3, 4, 5];
  for (let num of nomor) {
    console.log(num);
    num = num + 1; // this will cause an error (if using const variable)
  }
  console.log("----------");

  const people = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Jim", age: 40 },
  ];
  for (const person of people) {
    console.log(`${person.name} is ${person.age} years old`);
    /**
     * output:
     * John is 30 years old
       Jane is 25 years old
       Jim is 40 years old
     */
  }
}
