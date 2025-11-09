/**
 * Fungsi findLongestWordLength, membaca kalimat kata demi kata,
 * mengecek panjang setiap kata, lalu mencari mana yang paling panjang.
 * Hasil akhirnya adalah angka yang menunjukkan panjang kata terpanjang tersebut.
 */
function findLongestWordLength(sentence) {
  // Pecah kalimat menjadi array kata. Contoh: "The quick brown" jadi ["The", "quick", "brown"].
  const words = sentence.split(" ");

  // Variabel untuk menyimpan panjang kata terpanjang sejauh ini.
  let maxLength = 0;

  // Loop setiap kata dalam array words.
  for (const word of words) {
    // Cek panjang kata dengan .length
    const wordLength = word.length;

    // Kalau panjang kata ini lebih besar dari maxLength sebelumnya,
    // update nilai maxLength.
    if (wordLength > maxLength) {
      maxLength = wordLength;
    }
  }

  // Kembalikan panjang kata paling panjang.
  return maxLength;
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
); // 6
console.log(findLongestWordLength("May the force be with you")); // 5
console.log(findLongestWordLength("Google do a barrel roll")); // 6
console.log(
  findLongestWordLength(
    "What is the average airspeed velocity of an unladen swallow"
  )
); // 8
console.log(
  findLongestWordLength(
    "What if we try a super-long word such as otorhinolaryngology"
  )
); // 19

//  dibawah ini merupakan oret oret an
// {
//   const sentence = "What if we try a super-long word such as";
//   const words = sentence.split(" ");
//   console.log(words);

//   let maxLength = 0;

//   for (const word of words) {
//     const wordLength = word.length;

//     if (wordLength > maxLength) {
//       maxLength = wordLength;
//     }
//   }
//   console.log(maxLength);
// }
