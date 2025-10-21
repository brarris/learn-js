'use strict';

/**
 * ---- data Object ----
 */
{
  const user = {
    name: 'Dicoding',
    'last name': 'Indonesia',
    age: 9,
    lastName: 'Indonesia',
  };

  // cara mengakses menggunakan dot notation
  console.log(user.name);

  // cara mengakses menggunakan square bracket
  console.log(user['last name']);

  // mengakses menggunakan object destructuring
  const { name, lastName, isMale = false } = user;
  console.log(name, lastName);

  console.log(isMale);
}

{
  /**
   * object destructuring sangat berguna sekali ketika memiliki
   * object dengan properti yang banyak dan ingin mendapatkan nilai
   * masing-masing properti
   */
  const user = {
    id: 24,
    email: 'aras@dicoding.com',
    name: 'Arsy',
    nickname: 'Aras',
    username: 'aras123',
    password: 'secret',
  };

  // jika menggunakan object destructuring
  const { id, email } = user;
  console.log(id, email);

  // tanpa menggunakan object destructuring
  const username = user.username;
  const password = user.password;
  console.log(username, password);

  // mengubah nilai pada properti
  user.id = 20;
  console.log(user.id);

  // menghapus properti pada object
  delete user.password;
  console.log(user);

  // selain menggunakan dot notation (.), juga bisa menggunakan operator delete dengan tanda kurung siku
  delete user['username'];
  console.log(user);
}

/**
 *  ---- Menstrukturkan Data dengan ARRAY ----
 */
{
  const array = [1, 2];
  console.log(typeof array); // bertipe data object

  // menggunakan object constructor
  const users = new Array();
  const numbers = new Array(5);

  console.log(users); // output: [], karena array 'users' merupakan array kosong yang belum memiliki element
}

{
  // menggunakan sintaks Array.from
  const foo = Array.from('foo');
  console.log(foo); // output: ['f', 'o', 'o']
  /**
   * Array.from merupakan method untuk membuat array yang diperkenalkan di ES6.
   * Array.from juga dapat dimanfaatkan untuk menyalin array lainnya seperti berikut ini.
   */

  const users = new Array('John', 'Jane', 'Jack', 'Jill');
  const customer = Array.from(users);
  console.log(customer); // output: ['John', 'Jane', 'Jack', 'Jill']
}

{
  // menggunakan array literal
  const array = [];
  const fruits = ['apple', 'banana', 'cherry', '', 'grape'];
  console.log(fruits); // output: ['apple', 'banana', 'cherry', '', 'grape']
}

{
  // mengakses element Array
  const myArray = [42, 55, 30];
  console.log(myArray[1]); // output: 55
  /**
   * ketika mengakses indeks diluar dari ukuran array akan menghasilkan 'undefined'. jadi jangan sampai mengakses array melebihi ukuran!
   */
}

{
  /**'
   * Manipulasi nilai Array
   */

  // Menggunakan indexing
  let myArray = [1, 2, 3, 4, 5];
  myArray[1] = 10; // mengubah nilai element ke-2
  console.log(myArray); // output: [1, 10, 3, 4, 5]

  // menggunakan push
  myArray.push(6); // menambahkan nilai ke dalam array yang berada di elemen terakhir
  console.log(myArray); // output: [1, 10, 3, 4, 5, 6]
}

{
  /**
   * Menghapus Element dan Data Array
   */
  let myArray = ['Android', 'Data Science', 'Web'];
  delete myArray[1];
  console.log(myArray); // output: ['Android', <1 empty item>, 'Web']
  /**
   * Data pada array sudah berhasil di hapus, tetapi element-nya masih ada.
   * Lalu bagaimana cara untuk menghapus element dan datanya? Untuk melakukan
   * hal ini dapat dilakukan dengan menggunakan method splice()
   */

  myArray.splice(1, 1);
  console.log(myArray); // output: ['Android', 'Web']

  myArray.splice(1, 2);
  console.log(myArray); // output: ['Android']
}

{
  // menggunakan method shift dan pop
  let myArray = ['Android', 'Data Science', 'Web'];
  myArray.shift(); // shift hanya menghapus element pertama
  console.log(myArray); // output: ['Data Science', 'Web']

  let Arrayku = ['Android', 'Data Science', 'Web'];
  Arrayku.pop(); // pop hanya menghapus element terakhir
  console.log(Arrayku); // output: ['Android', 'Data Science']
}

/**
 * Array Destructuring
 */
{
  const introduction = ['Hello', 'Arsy'];
  const [greeting, name] = introduction;
  console.log(greeting); // output: Hello
}

{
  // Array Method "reserve", mengembalikan array dengan element yang dibalik
  const myArray = ['Android', 'Data Science', 'Web'];
  myArray.reverse();
  console.log(myArray); // output: ['Web', 'Data Science', 'Android']
}

{
  // Array Method "Sort", mengurutkan array secara ascending berdasarkan abjad
  const myArray = ['Web', 'Android', 'Data Science'];
  myArray.sort();
  console.log(myArray); // output: ['Android', 'Data Science', 'Web']
}

/**
 * ---- Menstrukturkan Data dengan Map ----
 * Map berfungsi untuk menutupi kekurangan dari object, yang dimana Map dapat
 * menggunakan key dengan tipe data apa pun
 */

{
  // Membuat Map
  const map = new Map();

  const productMap = new Map([
    ['shoes', 500],
    ['cap', 350],
    ['jeans', 250],
  ]);

  console.log(productMap);
  // output: Map(3) { 'shoes' => 500, 'cap' => 350, 'jeans' => 250 }
}

{
  // Menyimpan Nilai di Map menggunakan method 'set'. set menerima dua nilai (key, value)
  const map = new Map();
  map.set('name', 'aras');
  console.log(map); // Map(1) { 'name' => 'aras' }

  map.set(1, 'number one');
  console.log(map); // Map(2) { 'name' => 'aras', 1 => 'number one' }
}

{
  // Mengakses Nilai di Map dengan menggunakan method 'get'
  const map = new Map();
  map.set('name', 'aras');
  console.log(map.get('name')); // output: aras
  // contoh diatas, key-nya adalah 'name' dan nilai yang dikembalikan adalah "aras".
}

{
  // Menghapus Nilai di Map menggunakan method 'delete', method ini akan menghapus nilai spesifik berdasarkan key yang kita tentukan.
  const map = new Map();
  map.set('name', 'aras');
  map.set('last name', 'opraza');
  map.delete('last name');
  console.log(map); // Map(1) { 'name' => 'aras' }

  /**
   * Kembalian dari method delete akan bernilai true jika element tersedia atau
   * berhasil dihapus. Namun, kembaliannya juga dapat bernilai false jika element
   * yang ingin dihapus tidak ada.
   */
}

/**
 * ---- Menstrukturkan Data dengan Set ----
 * Set merupakan struktur data yang spesial dibandingkan map, array, dan object.
 * mengapa bisa dikatakan spesial?
 * karena Set tidak memiliki key dan indeks ketika menyimpan data, selain itu...
 * data yang disimpan di dalam set akan bernilai unik artinya tidak akan ada data
 * yang duplikat.
 */

{
  const mySet = new Set([1, 2, 3]);
  console.log(mySet); // output: Set(3) { 1, 2, 3 }
}

{
  /**
   * Menyimpan Nilai di Set menggunakan method 'add', dimana method add hanya
   * menerima satu argument sebagai nilai yang ingin kita tambahkan ke dalam set.
   * Jika kita memberikan nilai yang sama, set hanya akan menyimpan sekali saja.
   * Oleh karena itu, data yang ada di dalam set tidak akan terduplikat.
   */
  const set = new Set();
  set.add(1);
  set.add('Apple');
  set.add(1);
  set.add('Apple');

  console.log(set); // output: Set(2) { 1, 'Apple' }
}

{
  // Mengakses Nilai di Set
  const set = new Set();
  set.add(1);
  set.add(2);

  for (const number of set) {
    console.log(number);
    /**
     * output:
     * 1
     * 2
     */
  }
}

{
  // Menghapus Nilai di Set
  const set = new Set();
  set.add(1);
  set.add(2);
  set.delete(1);

  console.log(set); // Set(1) { 2 }
}

/**
 * <--! Spread Operator --!>
 * memiliki arti sesuai dengan namanya, yaitu menyebarkan. Biasa digunakan untuk
 * menyebarkan nilai yang ada pada object dan array. spread operator yang ditandai
 * dengan sintaks tiga titik (...) adalah fitur yang menarik dan membantu
 * dalam pengelolaan object dan array. Dengan spread operator, nilai object dan array
 * dapat di-iterable menjadi beberapa element.
 * 'iterable' secara sederhana berarti nilai-nilai dalam suatu object atau array,
 * dapat dipecah atau diurai satu per satu menjadi elemen-elemen individual.
 */

{
  const buahKeranjang1 = ['apel', 'pisang'];
  const buahKeranjang2 = ['jeruk', 'mangga'];

  // Menggunakan spread operator untuk 'menyebarkan' buah dari keranjang1 dan keranjang 2
  // sehingga mereka menjadi elemen terpisah di keranjangBaru
  const keranjangBaru = [...buahKeranjang1, ...buahKeranjang2];
  console.log(keranjangBaru); // output: ['apel', 'pisang', 'jeruk', 'mangga']
  /**
   * dari contoh output diatas, spread operator juga dapat menggabungkan dua array.
   * Selain itu spread operator pada array juga dapat digunakan untuk
   * menyalin sebuah array seperti berikut dibawah ini.
   */

  const original = ['apple', 'banana', 'cherry'];
  const copy = [...original];
  console.log(copy); // output: ['apple', 'banana', 'cherry']
}

{
  // spread operator pada object
  const obj1 = { name: 'Dicoding' };
  const obj2 = { lastName: 'Indonesia', address: 'Jl. Batik Kumeli No 50' };
  const newObj = { ...obj1, ...obj2 };

  console.log(newObj);
  /**output:
   *{
   *  name: 'Dicoding',
   *  lastName: 'Indonesia',
   *  address: 'Jl. Batik Kumeli No 50'
   *}
   * bisa dilihat bahwa output diatas bahwa spread operator dapat mempermudah
   * menggabungkan dua object.
   */

  const originalObj = { name: 'Dicoding', age: 9 };
  const copiedObj = { ...originalObj };

  console.log(copiedObj); // output: { name: 'Dicoding', age: 9 }
  /**
   * Selain mempermudah menggabungkan object, spread operator juga mempermudah
   * untuk menyalin object seperti contoh di atas.
   */
}
