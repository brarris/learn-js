// Working with JSON
// import data from "./example.json" with { type: "json" };
// console.log(data.age);
// console.log(data["list of courses"]);

const developerObj = {
  firstName: "Jessica",
  isAwesome: true,
  isMusician: true,
  country: "USA",
};

const jsonString = JSON.stringify(developerObj);
console.log(jsonString); // {"firstName":"Jessica","isAwesome":true,"isMusician":true,"country":"USA"}
/**
 * In the example, the JavaScript object user is converted into a JSON string that looks like on the output above
 */

console.log(JSON.stringify(developerObj, ["firstName", "country"])); // {"firstName":"Jessica","country":"USA"}
/**
 * On the example above, we have a developerObj with four properties. When we use the JSON.stringify() method,
 * we can pass in an array for the second parameter and specify which properties we want stringified.
 * The result will be a stringified object containing only the firstName and country properties.
 */

/**
 * Another method you will be using a lot in your programming is the JSON.parse() method. JSON.parse() converts a JSON string back into a JavaScript object.
 * This is useful when you retrieve JSON data from a web server or from localStorage and you need to manipulate the data in your application. You will learn more about localStorage in a future lesson.
 */
const jsonstring = '{"name":"John","age":30,"isAdmin":true}';
const userObject = JSON.parse(jsonstring);
console.log(userObject);
/**
 * The JSON string is parsed back into a JavaScript object that looks like this
 * {
 * name: "John",
 * age: 30,
 * isAdmin: true
 * }
 */
