'use strict';

function categorizeNumber(input) {
  if (typeof input !== 'number' || !Number.isInteger(input)) {
    throw new Error("Input harus berupa bilangan bulat");
  }

  if (input === 0) {
    return "Nol";
  }

  if (input < 0) {
    return "Negatif";
  }

  if (isPrime(input)) {
    return "Prima";
  }

  return input % 2 === 0 ? "Genap" : "Ganjil";
}

function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;

  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }

  return true;
}

// Contoh penggunaan
console.log(categorizeNumber(15));  // Output: "Ganjil"
console.log(categorizeNumber(12));  // Output: "Genap"
console.log(categorizeNumber(17));  // Output: "Prima"
console.log(categorizeNumber(0));   // Output: "Nol"
console.log(categorizeNumber(-5));  // Output: "Negatif"

try {
  categorizeNumber('abc');
} catch (error) {
  console.log(error.message); // Output: "Input harus berupa bilangan bulat"
}



// bisa juga begini
// {
//   function checkPrime(num) {
//     if (num <= 1) return false; // bilangan <= bukan prima
//     if (num === 2) return true; // 2 adalah bilangan prima pertama
//     if (num % 2 === 0) return false; // bilangan genap (kecuali 2) bukan prima
    
//     for (let i = 3; i <= Math.sqrt(num); i += 2){
//       if (num % i === 0) return false; // jika ada pembagi selain 1 dan num, bukan prima
//       /**
//        * for adalah proses pengecekan pembagi
//        * 1. pada for hanya cek dari 3 sampai akar dari num (Math.sqrt(num)).
//        * 2. kenapa si cukup sampai akar saja?
//        *   - karena kalau ada pembagi lebih besar dari akar, maka pasti ada yang lebih kecil dari akar juga
//        *   - contoh: 30 = 5 * 6. sudah tau ada angka 5, maka nggak perlu cek 6
//        *   - maksud dari contoh diatas: jika sudah tau ada bilangan 5 yang bisa membagi 30 dengan sisa 0, maka:
//        *   - pasangan nya(angka 6) pasti otomatis juga pembagi(jadi cukup cek sampai akar dari 30 yaitu 5.47)
//        * 3. i += 2 untuk cek bilangan ganjil saja(karena genap sudah di cek pada kondisional statement sebelumnya)
//        */
//     }
//     return true;
//   }

//   function categorizeNumber(inputs) {
//     /**
//      * TODO:
//      * Lengkapilah fungsi ini agar dapat menghasilkan output berupa kategori bilangan berdasarkan input yang diberikan.
//      * Dengan ketentuan sebagai berikut:
//      * 1. Jika input bukan number, bangkitkan (throw) error.
//      * 2. Jika input adalah bilangan genap, kembalikan dengan nilai "Genap".
//      * 3. Jika input adalah bilangan ganjil, kembalikan dengan nilai "Ganjil".
//      * 4. Jika input adalah bilangan prima, kembalikan dengan nilai "Prima".
//      * 5. Jika input adalah nol, kategorikan kembalikan dengan nilai "Nol".
//      * 6. Jika input negatif, kembalikan dengan nilai "Negatif".
//      */
//     for (let i = 0; i < inputs.length; i++){
//       const input = inputs[i];

//       if (typeof input !== 'number' || !Number.isInteger(input)) {
//         throw new Error('Input harus berupa bilangan bulat.');
//       }

//       let category;

//       if (input === 0) {
//         category = 'Nol';
//       } else if (input < 0) {
//         category = 'Negatif';
//       } else if (checkPrime(input)) {
//         category = 'Prima';
//       } else if (input % 2 === 0) {
//         category = 'Genap';
//       } else {
//         category = 'Ganjil';
//       }

//       console.log(`Number ${i + 1}: ${input} (${category})`);
//     }
//   }

//   try {
//     const inputNumbers = [15, 12, 17, 0, -5];
//     categorizeNumber(inputNumbers);
//   } catch (error) {
//     console.log(error.message);
//   } 
// }