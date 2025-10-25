/**
 * Build a Celcius to Fahrenheit Converter
 *
 * Example code:
 * `fahrenheit = celcius * (9/5) + 32`
 *
 * User Stories:
 * 1. You should create a function named `convertCtoF`.
 * 2. `convertCtoF` should take a single numeric argument, which is the temperature in Celcius.
 * 3. `convertCtoF` should return a number.
 */

const convertCtoF = (temperature) => {
  return temperature * (9 / 5) + 32;
};

console.log(convertCtoF(0));
console.log(convertCtoF(-30));
console.log(convertCtoF(20));
