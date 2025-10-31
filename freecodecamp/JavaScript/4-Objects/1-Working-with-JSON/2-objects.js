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

console.log(JSON.stringify(developerObj, null, 2));
