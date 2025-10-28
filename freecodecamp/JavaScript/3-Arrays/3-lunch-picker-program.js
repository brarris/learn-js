let lunches = [];

const addLunchToEnd = (arr, item) => {
  arr.push(item);
  console.log(`${item} added to the end of the lunch menu.`);
  return arr;
};

const addLunchToStart = (arr, item) => {
  arr.unshift(item);
  console.log(`${item} added to the start of the lunch menu.`);
  return arr;
};

const removeLastLunch = (arr) => {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
  } else {
    const removedItem = arr.pop();
    console.log(`${removedItem} removed from the end of the lunch menu.`);
  }
  return arr;
};

const removeFirstLunch = (arr) => {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
  } else {
    const removedItem = arr.shift();
    console.log(`${removedItem} removed from the start of the lunch menu.`);
  }
  return arr;
};

const getRandomLunch = (arr) => {
  if (arr.length === 0) {
    console.log("No lunches available.");
  } else {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const randomItem = arr[randomIndex];
    console.log(`Randomly selected lunch: ${randomItem}`);
  }
};

const showLunchMenu = (arr) => {
  if (arr.length === 0) {
    console.log("The menu is empty.");
  } else {
    console.log(`Menu items: ${arr.join(", ")}`);
  }
};

// --- CONTOH PENGGUNAAN dan PEMANGGILAN ---
// bisa di uncomment ya

/*
console.log("--- Testing Menu ---");
showLunchMenu(lunches); // "The menu is empty."

console.log("\n--- Adding Lunches ---");
addLunchToEnd(lunches, "Pizza");
addLunchToEnd(lunches, "Burger");
addLunchToStart(lunches, "Salad");
showLunchMenu(lunches); // "Menu items: Salad, Pizza, Burger"

console.log("\n--- Getting Random Lunch ---");
getRandomLunch(lunches); // "Randomly selected lunch: [one of the items]"
showLunchMenu(lunches); // Menu is unchanged

console.log("\n--- Removing Lunches ---");
removeFirstLunch(lunches); // "Salad removed..."
removeLastLunch(lunches); // "Burger removed..."
showLunchMenu(lunches); // "Menu items: Pizza"

console.log("\n--- Emptying Menu ---");
removeFirstLunch(lunches); // "Pizza removed..."
removeFirstLunch(lunches); // "No lunches to remove."
showLunchMenu(lunches); // "The menu is empty."
*/
