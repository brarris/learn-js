function mutation(arr) {
  // ubah kedua kata ke lowercase
  let first = arr[0].toLowerCase();
  let second = arr[1].toLowerCase();
  // cek setiap huruf di kata kedua
  for (let letter of second) {
    // kalau huruf tidak ada di kata pertama, langsung false
    if (!first.includes(letter)) {
      return false;
    }
  }
  // kalau semua huruf ditemukan
  return true;
}

console.log(mutation(["HAI dunia", "Haiiiii"])); // true
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])); // true
console.log(mutation(["voodoo", "no"])); // false
console.log(mutation(["Tiger", "Zebra"])); // false
