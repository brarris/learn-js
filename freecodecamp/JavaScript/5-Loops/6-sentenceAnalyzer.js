/**
 * fungsi getVowelCount, membaca kalimat huruf demi huruf,
 * mengecek apakah karakter adalah huruf vokal (a, e, i, o, u), dan menghitung jumlahnya.
 */
function getVowelCount(sentence) {
  const vowels = "aiueo";
  let count = 0;

  // Loop for...of ini akan mengambil karakter satu per satu dari kalimat tersebut. Misalnya "Hi!" jadi: "h", "i", "!".
  for (const char of sentence.toLowerCase()) {
    // if (vowels.includes(char)) { count++; }, Cek apakah karakter yang sedang diperiksa termasuk dalam kumpulan vokal tadi, Kalau iya, tambahkan nilai count satu.
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
const vowelCount = getVowelCount("Apples are tasty fruits");
console.log(`Vowel Count: ${vowelCount}`); // Vowel Count: 7

/**
 * Fungsi getConsonantCount, membaca kalimat huruf demi huruf, mengecek apakah karakter adalah huruf alfabet dan bukan vokal,
 * lalu menghitungnya sebagai konsonan.
 */
const getConsonantCount = (sentence) => {
  const consonants = "bcdfghjklmnpqrstvwxyz";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (consonants.includes(char)) {
      count++;
    }
  }
  return count;
};
const consonantCount = getConsonantCount("Coding is fun");
console.log(`Consonant Count: ${consonantCount}`); // Consonant Count: 7

/**
 * Fungsi getPunctuationCount, membaca kalimat karakter demi karakter,
 * menghitung semua karakter yang bukan huruf dan bukan spasi sebagai tanda baca..
 */
const getPunctuationCount = (sentence) => {
  const punctuations = ".,!?;:-()[]{}\"'–";
  let count = 0;

  for (const char of sentence) {
    if (punctuations.includes(char)) {
      count++;
    }
  }
  return count;
};
const punctuationCount = getPunctuationCount("WHAT?!?!?!?!?");
console.log(`Punctuation Count: ${punctuationCount}`); // Punctuation Count: 9

/**
 * Fungsi getWordCount, menghapus spasi di awal dan akhir kalimat, memecah kalimat berdasarkan satu atau lebih spasi,
 * lalu menghitung jumlah kata yang dihasilkan. Jika kalimat kosong, hasilnya 0.
 */
const getWordCount = (sentence) => {
  if (sentence.trim() === "") {
    return 0;
  }

  const words = sentence.trim().split(/\s+/);
  return words.length;
};
const wordCount = getWordCount("I love freeCodeCamp");
console.log(`Word Count: ${wordCount}`); // Word Count: 3
