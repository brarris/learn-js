/**
 * Build a Confirm the Ending Tool
 *
 * User Stories:
 * 1. You should create a function named `confirmEnding` that takes two parameters:
 *   the string to check and the string to check against.
 * 2. The function should return `true` if the first string ends with the second string,
 *   and `false` otherwise.
 * 3. You should not use the `.endsWith()` method; instead, use one of the JavaScript substring methods to achieve this.
 */

function confirmEnding(str, target) {
  const panjangTarget = target.length;

  const bagianAkhirStr = str.slice(-panjangTarget);

  if (bagianAkhirStr === target) {
    return true;
  } else {
    return false;
  }
}

console.log("3. 'Bastian', 'n' ->", confirmEnding("Bastian", "n"));
console.log(
  "4. 'Congratulation', 'on' ->",
  confirmEnding("Congratulation", "on")
);
console.log("5. 'Connor', 'n' ->", confirmEnding("Connor", "n"));
console.log(
  "7. 'He has to give me a new name', 'name' ->",
  confirmEnding("He has to give me a new name", "name")
);
