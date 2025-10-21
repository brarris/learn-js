'use strict';
// Hasil review ulang pembelajaran
{
  function convertCelciusToFahrenheit(temperature) {
    const temperatureInFahrenheit = (9 / 5) * temperature + 32;

    console.log('Hasil konversi:', temperatureInFahrenheit);
  }

  const temperatureInCelcius = 90;
  convertCelciusToFahrenheit(temperatureInCelcius);
}

{
  const CelciusKeFahrenheit = function (temperature) {
    return (9 / 5) * temperature + 32;
  };

  const temperatureDalamFahrenheit = CelciusKeFahrenheit(50);
  console.log('Hasil Konversi:', temperatureDalamFahrenheit);
}

{
  // arrow function

  const konversiCelciuskeFahrenheit = (temperature) => {
    return (9 / 5) * temperature + 32;
  };

  const hasilKonversi = konversiCelciuskeFahrenheit(90);
  console.log('Hasil konversi:', hasilKonversi);
}

{
  // arrow function versi ringkas
  const CelciuskeFahrenheitversiRingkas = (suhu) => (9 / 5) * suhu + 32;
  let SuhudalamFahrenheit = CelciuskeFahrenheitversiRingkas(50);
  console.log('Hasil konversi:', SuhudalamFahrenheit);
}
