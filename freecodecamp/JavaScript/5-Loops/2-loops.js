// ----- What Is the For...in Loop, and When Should You Use It? -----

/**
 * remember, the basic syntax of a `for...in`
 * for (variable in object) {
 *   -- code block to be executed
 * }
 */

{
  const fruit = {
    name: "apple",
    color: "red",
    price: 0.99,
  };
  for (const property in fruit) {
    console.log(fruit[property]);
  }
  // output: apple red 0.99
  console.log("----------");
}

{
  // In this second example, we have a nested object and we want to loop over each property and log the value to the console.
  const person = {
    name: "John",
    age: 30,
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
    },
  };
  for (const prop in person) {
    console.log(person[prop]);
  }
  /**
   * output:
   * John
   * 30
   * { street: '123 Main St', city: 'Anytown', state: 'CA' }
   */

  console.log("----------");
  // If you want to loop over the properties of the address object, you can nest another for...in loop inside the first one.
  function isObject(obj) {
    return typeof obj === "object" && !Array.isArray(obj) && obj !== null;
  }

  for (const prop in person) {
    if (isObject(person[prop])) {
      for (const nestedProp in person[prop]) {
        console.log(person[prop][nestedProp]);
      }
    } else {
      console.log(person[prop]);
    }
  }
  console.log("-------");
  // penjelasan https://docs.google.com/document/d/1TOMMh99BA6kU_GWzERT7-_tHDBtG5QEtrAUiQmH-3uQ/edit?usp=sharing
  /**
   * output:
   * John
   * 30
   * 123 Main St
   * Anytown
   * CA
   */
}
