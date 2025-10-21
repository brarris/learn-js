'use strict';

{
  // if statement

  const gajian = true;

  // console.log('Jalan-jalan di mall');
  if (gajian) {
    // console.log('Makan di restoran mall');
  }

  // console.log('Pulang ke rumah');
}

{
  const score = 80;

  if (score >= 80) {
    // console.log('Selamat, Anda lulus!');
  } else {
    // console.log('Maaf, Anda belum lulus');
  }
  /**
   * output:
   * Selamat, Anda lulus!
   */
}


/* Ternary operator */
{
  const price = 100000;
  const isMember = true;
  const discount = isMember ? 0.1 : 0;

  // console.log(`Anda mendapatkan discount sebesar ${discount * price}`);
  // console.log(`Maka harga setelah diskon menjadi ${price - discount * price}`);
  /**
   * output:
   * Anda mendapatkan discount sebesar 10000
   * Maka harga setelah diskon menjadi 90000
   */
}

/* Switch Case */
{
  const fruit = 'human';

  switch (fruit) {
    case 'banana':
      console.log('I am a banana');
      break;
    case 'apple':
      console.log('I am an apple');
      break;
    case 'orange':
      console.log('I am an orange');
      break;
    case 'strawberry':
      console.log('I am a strawberry');
      break;
    default:
      // console.log('I am not a fruit. I am a programmer');
  }
}


/* Perbedaan if-else dengan switch case */
{
  const day = new Date().getDay();

  if (day === 0) {
    console.log('Minggu');
  } else if (day === 1) {
    console.log('Senin');
  } else if (day === 2) {
    console.log('Selasa');
  } else if (day === 3) {
    console.log('Rabu');
  } else if (day === 4) {
    console.log('Kamis');
  } else if (day === 5) {
    console.log('Jumat');
  } else if (day === 6) {
    console.log('Sabtu');
  } else {
    console.log('Hari tidak valid');
  }

  switch (day) {
    case 0:
      console.log('Minggu');
      break;
    case 1:
      console.log('Senin');
      break;
    case 2:
      console.log('Selasa');
      break;
    case 3:
      console.log('Rabu');
      break;
    case 4:
      console.log('Kamis');
      break;
    case 5:
      console.log('Jumat');
      break;
    case 6:
      console.log('Sabtu');
      break;
    default:
      console.log('Hari tidak valid');
  }
}

// seandainya dalam switch case lupa pakai keyword break
{
  const number = 2;

  switch (number) {
  case 1:
    console.log('Ini 1');
    break;
  case 2:
    console.log('Ini 2');
  case 3:
    console.log('Ini 3');
    break;
  default:
    console.log('Ini default');
  }

  /**
   * output:
   * Ini 2
   * Ini 3
   */
}