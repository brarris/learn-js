const addTwoAndSeven = () => {
  return 2 + 7;
};
console.log(addTwoAndSeven()); // 9

function addThreeAndFour() {
  return 3 + 4;
}
console.log(addThreeAndFour()); // 7

// 1. functions with parameter and argument
const calculateSum = (num1, num2) => {
  return num1 + num2;
};
console.log(calculateSum(2, 5)); // 7
console.log(calculateSum(10, 10)); // 20

function calculateDifference(num1, num2) {
  return num1 - num2;
}
console.log(calculateDifference(22, 5)); // 17
console.log(calculateDifference(17, 9)); // 8

const calculateProduct = (num1, num2) => {
  return num1 * num2;
};
console.log(calculateProduct(13, 5)); // 65

function calculateQuotient(num1, num2) {
  // if (num2 === 0) {
  //   return "Error: Division by zero";
  // }
  // return num1 / num2;
  return num2 === 0 ? "Error: Division by zero" : num1 / num2;
}
console.log(calculateQuotient(7, 11)); // 0.64
console.log(calculateQuotient(3, 0)); // Error: Division by zero

const calculateSquare = (num) => {
  // return Math.pow(num, 2);
  return num ** 2;
};
console.log(calculateSquare(2)); // 4
console.log(calculateSquare(9)); // 81

function calculateSquareRoot(num) {
  return Math.sqrt(num);
}
console.log(calculateSquareRoot(9)); // 3
console.log(calculateSquareRoot(25)); // 5
