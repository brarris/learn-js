// Working with Optional Chaining and Object Destructuring

{
  // ----- The optional chaining operator (?.) -----
  // is a useful tool in JavaScript that lets you safely access object properties or call methods without worrying wheter they exist.It's like a safety net for working with objects that might have missing parts.
  const person = {
    name: "Alice",
    age: 30,
  };
  /**
   * In this example, person.name exists, so it logs Alice. But person.job doesn't exist, so it gives us undefined.
   */
  console.log(person.name); // "Alice"
  console.log(person.job); // undefined

  // Now, let's say we want to access a property of an object that might not exist:
  // console.log(person.addredd.street); // This will throw an error!
  /**
   * on the example above will throw an Uncaught TypeError. Since person.address is undefined,
   * we are not able to access the street property. This is where the optional chaining operator comes in handy.
   */

  const user = {
    name: "John",
    profile: {
      email: "john@example.com",
      address: {
        street: "123 Main St",
        city: "Somewhere",
      },
    },
  };

  console.log(user.profile?.address?.street); // 123 Main St
  console.log(user.profile?.phone?.number); // undefined
  /**
   * By using the optional chaining operator, we are telling JavaScript to only continue with the operation if the object
   * (or the value before the ?.) exists and is not null or undefined.
   *
   * If the value before the ?. is null or undefined,
   * JavaScript returns undefined rather than attempting to proceed with the operation and throwing an error.
   *
   * Remember, the optional chaining operator is most useful when you're not sure if a property or method exists. It helps prevent errors and makes your code more robust.
   */
}

{
  // ----- Object Destructuring ----
  /**
   * Object destructuring is a powerful feature in JavaScript that allows you to extract values from objects and assign them to variables in a more concise and readable way.
   *
   * It's part of the ES6 (ECMAScript 2015) specification and has become an essential tool for many JavaScript developers.
   */
  let person = { name: "Alice", age: 30, city: "New York" };
  const { name, age } = person;
  console.log(name); // Alice
  console.log(age); // 30

  let { name: personName, age: personAge } = person;
  console.log(personName, personAge); // Alice 30

  let { country = "Unknown" } = person;
  console.log(country); // Unknown

  // ---- Shorthand notation ----
  let nama = "Bob";
  let umur = 20;

  let orang = { nama, umur };
  console.log(orang); // { nama: 'Bob', umur: 20 }

  // This shorthand notation is particularly useful when you're returning objects from functions or creating objects with multiple properties:
  const createPerson = (name, age) => {
    return { name, age };
  };
  let personObj = createPerson("Charlie", 35);
  console.log(personObj); // { name: 'Charlie', age: 35 }
}
