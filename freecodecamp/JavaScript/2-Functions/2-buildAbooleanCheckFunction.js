/**
 * you will build a function that checks if a value is classified as a boolean primitive.
 *
 * Boolean primitives `are` true and `false`.
 *
 * Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.
 *
 * User Stories:
 * 1. You should have a function called `booWho` that receives one argument.
 * 2. If the argument received is a boolean primitive, the function should return `true`.
 * 3. If the argument is any other value, the function should return `false`.
 */

function booWho(argument) {
  if (argument === true || argument === false) {
    return true;
  } else {
    return false;
  }
}
// it only return value, if you wanted the output on browser, just added console.log(booWho())

booWho(true);
booWho(false);
booWho([1, 2, 3]);
booWho([].slice);
booWho({ a: 1 });
booWho(1);
booWho(NaN);
booWho("a");
booWho("true");
booWho("false");
