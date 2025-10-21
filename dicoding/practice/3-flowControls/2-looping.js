'use strict';

/* for loop*/
{
  for (let i = 0; i < 5; i++){
    // console.log(`Angka ke-${i} adalah ${i}`);
  }
  /**
   * output:
   * Angka ke-0 adalah 0
   * Angka ke-1 adalah 1
   * Angka ke-2 adalah 2
   * Angka ke-3 adalah 3
   * Angka ke-4 adalah 4
   */
}

/* for in */
{
  const person = { name: 'Fulan', origin: 'Bandung', birthYear: 2025 };

  for (const property in person) {
    // console.log(`${property} bernilai ${person[property]}`);
  }

  /**
   * output:
   * name bernilai Fulan
   * origin bernilai Bandung
   * birthYear bernilai 2025
   */
}

/* for of */
{
  const names = [ 'Bebek', 'Ayam', 'Telor', 'Tempe' ];

  for (const item of names) {
    // console.log(item);
  }

  /**
   * output:
   * Bebek
   * Ayam
   * Telor
   * Tempe
   */
}

/* while */
{
  let i = 0;

  while (i < 5){
    // console.log(`Angka ke-${i} adalah ${i}`);
    i++; // jika ini di hapus maka menyebabkan infinite loop (perulangan tanpa henti)
  }
  /**
   * output:
   * Angka ke-0 adalah 0
   * Angka ke-1 adalah 1
   * Angka ke-2 adalah 2
   * Angka ke-3 adalah 3
   * Angka ke-4 adalah 4
   */
}

/* do-while */
{
  let i = 0;

  do { // blok yang ada di dalam do setidaknya akan di jalankan satu kali
    // console.log(`Angka ke-${i} adalah ${i}`);
    i++;
  } while (i < 5);

  /**
   * output:
   * Angka ke-0 adalah 0
   * Angka ke-1 adalah 1
   * Angka ke-2 adalah 2
   * Angka ke-3 adalah 3
   * Angka ke-4 adalah 4
   */
}


/* control statement */
{
  // break
  for(let i = 0; i < 10; i++) {
    if (i === 5) {
      break; // untuk menghentikan kondisi jika nilai variabel i sama dengan 5, maka hasil looping hanya sampai dengan angka 4
    }

    // console.log(i);
  }
  /**
   * output:
   * 0
   * 1
   * 2
   * 3
   * 4
   */
}

{
  // continue
  for (let i = 0; i < 10; i++) {
    if (i === 5){
      continue; // looping berjalan seperti biasa. Namun nilai variabel i sama dengan 5, iterasi akan dihentikan dan lanjut ke iterasi berikutnya sehingga di terminal/console tidak akan menampilkan angka 5
    }
    // console.log(i);
  }
  /**
   * output:
   * 0
   * 1
   * 2
   * 3
   * 4
   * 6
   * 7
   * 8
   * 9
   */
}