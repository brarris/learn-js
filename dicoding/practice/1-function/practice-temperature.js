'use strict';

/* function biasa */
// function CelciusKeFahrenheit(temperature = 50) {
//   const temperatureFahrenheit = (9 / 5) * temperature + 32;
//   console.log('hasil konversi: ', temperatureFahrenheit);
// }

// const temperatureCelcius = 90;
// CelciusKeFahrenheit();
// CelciusKeFahrenheit(90);

function sumNumbers(a, b) {
  return a + b;
}

const result = sumNumbers(2, 4);
console.log('2 + 4 =', result);

/* function menggunakan return value */
// function CelciusKeFahrenheit(temperature) {
//   return (9 / 5) * temperature + 32;
// }

// const temperatureFahrenheit = CelciusKeFahrenheit(90);
// console.log('Hasil konversi: ', temperatureFahrenheit);

/* function expression */
const CelciusKeFahrenheit = function (temperature) {
  return (9 / 5) * temperature + 32;
};

const temperatureFahrenheit = CelciusKeFahrenheit(90);
console.log('Hasil konversi:', temperatureFahrenheit);

/* arrow function */
// const CelciusKeFahrenheitPakaiArrow = (suhu) => {
//   return (9 / 5) * suhu + 32;
// };

// const temperatureDalamFahrenheit = CelciusKeFahrenheitPakaiArrow(90);
// console.log('Hasil konversi:', temperatureDalamFahrenheit);

// versi singkat nya
const CelciusKeFahrenheitVersiSingkat = (suhu) => (9 / 5) * suhu + 32;

let temperatureDalamFahrenheit = CelciusKeFahrenheitVersiSingkat(90);
console.log('Hasil konversi:', temperatureDalamFahrenheit);
