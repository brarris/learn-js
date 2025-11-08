// What Are the Break and Continue Statements Used for in Loops?

// A `break` statement is used to exit a loop early, while a `continue` statement is used to skip the current iteration of a loop and move to the next one.

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i); // 0 1 2 3 4
}
console.log("-------");

// explanation https://docs.google.com/document/d/1TOMMh99BA6kU_GWzERT7-_tHDBtG5QEtrAUiQmH-3uQ/edit?tab=t.sl2r3el2tcse

// Here is an example of using a continue statement in a for loop:
{
  for (let i = 0; i < 10; i++) {
    if (i === 5) {
      continue;
    }
    console.log(i); // 0 1 2 3 4 5 6 7 8 9
  }
  console.log("----------");
  // explanation https://docs.google.com/document/d/1TOMMh99BA6kU_GWzERT7-_tHDBtG5QEtrAUiQmH-3uQ/edit?tab=t.sl2r3el2tcse
}

// explanation about nested loop: https://docs.google.com/document/d/1TOMMh99BA6kU_GWzERT7-_tHDBtG5QEtrAUiQmH-3uQ/edit?tab=t.sl2r3el2tcse
