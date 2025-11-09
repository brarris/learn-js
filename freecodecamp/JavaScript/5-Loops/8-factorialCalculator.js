let num = Math.floor(Math.random() * 19) + 1;

const factorialCalculator = (number) => {
  // mengapa 1? karena operasi faktorial selalu di mulai dari angka 1
  let result = 1;

  for (let i = 1; i <= number; i++) {
    // jadi tiap putaran loop, akan mengalikan result dengan angka i
    result *= i; // sama dengan result = result * i
  }
  return result;
};
const factorial = factorialCalculator(num);
const resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);
