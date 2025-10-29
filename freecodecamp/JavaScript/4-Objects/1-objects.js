//  Introduction to JavaScript Objects and Their Properties
{
  const person = {
    name: "alice",
    age: 30,
    city: "New York",
  };
  // 1. dot notation
  console.log(person.name); // alice
  console.log(person.age); // 30

  // 2. bracket notation
  console.log(person["name"]); // alice
  console.log(person["age"]); // 30
  // it allows developer to use variables to access properties dynamically
  let propertyName = "city";
  console.log(person[propertyName]); // New York
}

{
  console.log("----------How to Remove Properties from an object----------");

  // 3. `delete` properties
  const person1 = {
    name: "julia",
    age: 28,
    job: "engineer",
  };
  delete person1.job;
  console.log(person1.job); // undefined

  // 4. to remove properties by using destructuring with rest parameters
  const person2 = {
    name: "bob",
    age: 30,
    job: "engineer",
    city: "new york",
  };
  const { job, city, ...remainingProperties } = person2;
  console.log(remainingProperties); // { name: 'bob', age: 30 }

  // 5. How to Check If an Object Has a Property by using hasOwnProperty() method
  console.log(person2.hasOwnProperty("name")); // true
  console.log(person2.hasOwnProperty("address")); // false

  // 6. How to Check If an Object Has a Property by using `in` operator
  console.log("name" in person2); // true
  console.log("address" in person2); // false

  // 7. The third method involves checking if a property are not `undefined`
  console.log(person2.name !== undefined); // true
  console.log(person2.address !== undefined); // false
}

{
  console.log(
    "----------Accessing Properties from Nested Objects and Arrays in Objects----------"
  );

  // 8. chain the property accessors
  const person = {
    name: "alice",
    age: 30,
    contact: {
      email: "alice@example.com",
      phone: {
        home: "123-456-7890",
        work: "098-765-4321",
      },
    },
  };
  console.log(person.contact.phone.work); // 098-765-4321 (dot notation)
  console.log(person["contact"]["phone"]["work"]); // 098-765-4321 (bracket notation)

  // 9. how we can access data where one of the object properties has the value of an array.
  const person1 = {
    name: "alice",
    age: 30,
    addresses: [
      { type: "home", street: "123 Main St", city: "anytown" },
      { type: "work", street: "456 Market St", city: "workville" },
    ],
  };
  console.log(person1.addresses[1].city); // workville
}

{
  console.log(
    "----------the Difference Between Primitive and Non-Primitive Data Types----------"
  );
  // Here's an example of working with primitive data types (numbers, strings, booleans, null, undefined, and symbols)
  let num1 = 5;
  let num2 = num1;
  num1 = 10;
  console.log(num2); // 5

  //  Here's an example with non-primitive types (objects, arrays, and functions)
  const originalPerson = { name: "john", age: 30 };
  const copiedPerson = originalPerson;

  originalPerson.age = 31;
  console.log(copiedPerson.age); // 31
}

{
  console.log(
    "----------the Difference Between Functions and Object Methods----------"
  );
  // understanding these differences is crucial for writing effective and organized JavaScript code.
  // functions are reusable blocks of code that perform a spesific task
  function greet(name) {
    return "Hello, " + name + "!";
  }
  console.log(greet("Alice")); // Hello, Alice!

  const person = {
    name: "Bob",
    age: 20,
    sayHello: function () {
      return "Hello, my name is " + this.name;
    },
  };
  console.log(person.sayHello()); // Hello, my name is Bob
}

{
  console.log(
    "----------What Is the Object() Constructor, and When Should You Use It----------"
  );
  // new Object()
  const num = 42;
  const numObj = Object(num); // Creates an object wrapper for the number
  console.log(numObj); // 42
  console.log(typeof numObj); // object

  // What happens if we try to pass null or undefined to the Object() constructor?
  const newObj = new Object(undefined);
  console.log(newObj); // {} (the result will be an empty object)

  function toObject(value) {
    if (value === null || value === undefined) {
      return {};
    }
    if (typeof value === "object") {
      return value;
    }
    return Object(value);
  }

  console.log(toObject(null)); // {}
  console.log(toObject(true)); // [Boolean: true]
  console.log(toObject([1, 2, 3])); // [ 1, 2, 3 ]
}
