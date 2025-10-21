'use strict';

/* Membuat Set */
{
  const mySet = new Set([1, 2, 3]);

  // console.log(mySet);
  // Set(3) { 1, 2, 3 }
}

/* Menyimpan nilai di Set menggunakan method add */
{
  const set = new Set();
  set.add(1);
  set.add('Apple');
  set.add(1);
  set.add('Apple');

  // console.log(set);
  // Set(2) { 1, 'Apple' }
}

/* Mengakses nilai di set */
{
  // mengakses nilai Set menggunakan perulangan (looping)
  const set = new Set();
  set.add(1);
  set.add(2);
  for (const number of set) {
    // console.log(number);
    /** output:
     * 1
     * 2
     */
  }
}

{
  // mengakses nilai Set menggunakan keyword foreach
  const set = new Set();
  set.add(1);
  set.add(2);

  // set.forEach((value) => console.log(value));
  /** output:
   * 1
   * 2
   */
}

/* Menghapus nilai di Set */
{
  const set = new Set();
  set.add(1);
  set.add(2);
  set.delete(1);

  // console.log(set);
  // Set(1) { 2 }
}