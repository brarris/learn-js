// What Is a While Loop, and How Does It Differ from the Do...while Loop?

/**
 * basic syntax
 * while (condition) {
 *  // code block to be executed
 * }
 */

{
  // A while loop will run a block of code as long as the condition is true. Here is the basic syntax for a while loop:
  let count = 0;
  while (count < 5) {
    console.log(count);
    count++;
  } // 0 1 2 3 4
  console.log("-------");
}

// Another loop similar to the while loop would be the do...while loop. Here is the basic syntax:
/**
 * do {
 *  // code block to be executed
 * } while (condition);
 */

// One key difference between a `do...while` loop and a `while` loop is that the `do...while` loop will execute the block of code at least once before checking the condition.
// If the condition is true, the block of code will continue to execute. If the condition is false, the block of code will stop executing.
{
  let count = 0;
  do {
    console.log(count);
    count++;
  } while (count < 5); // 0 1 2 3 4
  /**
   * In the example above, we have a variable called count that is initialized to 0.
   * The do...while loop will log the value of count to the console and then increment count by 1.
   * After executing the block of code, it checks if the value of count is less than 5. If it is, the loop will continue to run.
   * If not, the loop will stop.
   */
  console.log("--------");
}
