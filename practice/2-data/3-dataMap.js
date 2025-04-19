'use strict';

/* Membuat map */
{
  const productMap = new Map([
    ['shoes', 500],
    ['cap', 350],
    ['jeans', 250]
  ]);
  
  // console.log(productMap);
  // Map(3) { 'shoes' => 500, 'cap' => 350, 'jeans' => 250 }
}

/* Menyimpan Nilai di Map */
{
  const map = new Map();
  map.set('name', 'aras'); // set menerima dua nilai, pertama adalah key, kedua adalah value
  // console.log(map);
  // Map(1) { 'name' => 'aras' }
}

{
  const map = new Map();
  map.set(1, 'number one');
  // console.log(map);
  // Map(1) { 1 => 'number one' }
}

/* Mengakses nilai di map */
{
  const map = new Map();
  map.set('name', 'aras');
  // console.log(map.get('name')); // method get untuk mengakses nilai berdasarkan key tertentu
  // aras
}

/* Menghapus nilai di map */
{
  const map = new Map();
  map.set('name', 'aras');
  map.set('last name', 'opraza');
  map.delete('last name');
  console.log(map);
  // Map(1) { 'name' => 'aras' }
}