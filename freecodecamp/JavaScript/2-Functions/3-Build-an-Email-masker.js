/**
 * you will mask the username part of an email address with asterisks.
 * Masking is a term used to hide or replace sensitive information with asterisks or other characters.
 *
 * For example, if the email address was `myEmail@email.com`, then the masked email address will be `m*****l@email.com`.
 *
 * Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.
 *
 * User Stories:
 * 1. Create a function named `maskEmail` that takes `email` as an argument.
 * 2. Inside the function, you should mask the `email` and append the domain name to it.
 *    Remember that you can use methods like slice, repeat, indexOf or even replace to help you.
 * 3. Outside the function, declare a variable named `email` to store the email address you want to mask.
 * 4. Call the `maskEmail` function with the email variable and output the result to the console.
 * 5. maskEmail("apple.pie@example.com") should return "a*******e@example.com".
 * 6. maskEmail("freecodecamp@example.com") should return "f**********p@example.com".
 * 7. maskEmail("info@test.dev") should return "i**o@test.dev".
 * 8. maskEmail("user@domain.org") should return "u**r@domain.org".
 */

function maskEmail(email) {
  const atIndex = email.indexOf("@");
  const username = email.slice(0, atIndex);
  const domain = email.slice(atIndex);

  const firstLetter = username.slice(0, 1);
  const lastLetter = username.slice(-1);

  const mask = "*".repeat(username.length - 2);

  return firstLetter + mask + lastLetter + domain;
}

const email = "myEmail@email.com";

console.log(maskEmail(email));
console.log(maskEmail("apple.pie@example.com"));
console.log(maskEmail("user@domain.org"));
