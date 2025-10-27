/*
  User Stories:
  1. Definisikan fungsi truncateString yang menerima dua argumen: str (string) dan num (number).
  2. Jika panjang string (str.length) LEBIH BESAR dari num,
     maka potong string sehingga panjangnya SAMA DENGAN num,
     lalu tambahkan '...' di akhir.
  3. Jika panjang string (str.length) SAMA DENGAN atau LEBIH KECIL dari num,
     maka kembalikan string tersebut TANPA diubah.
*/

const truncateString = (str, num) => {
  if (str.length <= num) {
    return str;
  }

  return str.slice(0, num) + "...";
};

console.log(
  "1. 'A-tisket a-tasket...' (8):",
  truncateString("A-tisket a-tasket A green and yellow basket", 8)
);

console.log(
  "2. 'Peter Piper picked...' (11):",
  truncateString("Peter Piper picked a peck of pickled peppers", 11)
);

const longString = "A-tisket a-tasket A green and yellow basket";

console.log("3. Panjang sama:", truncateString(longString, longString.length));
console.log(
  "4. Panjang lebih:",
  truncateString(longString, longString.length + 2)
);
console.log("5. 'A-...' (1):", truncateString("A-", 1));
console.log("6. 'Ab...' (2):", truncateString("Absolutely Longer", 2));
