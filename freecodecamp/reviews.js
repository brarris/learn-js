const firstName = "Paijo";
const lastName = "Paimin";

const myName = firstName + " " + lastName;
console.log(myName); // Paijo Paimin

// template literal (menggunakan backtik `` )
const name = `Halo nama saya ${firstName} ${lastName}`;
console.log(name); // Halo nama saya Paijo Paimin

{
  // short hand property name
  const a = 1;
  const b = 2;
  const c = 3;
  const num = 4;
  // ----- sebelum -----
  // const obj = {
  //   a: a,
  //   b: b,
  //   c: c,
  // };
  // console.log(obj); // { a: 1, b: 2, c: 3 }

  // ----- sesudah -----
  const obj = {
    a,
    b,
    c,
    d: num,
  };
  console.log(obj); // { a: 1, b: 2, c: 3, d: 4 }
}

{
  // function biasa
  function Component1(nama) {
    return nama + 1;
  }
  console.log(Component1(2)); // 3

  // arrow function
  const Component2 = (nama) => nama + 1;
  console.log(Component2(3)); // 4
}

{
  // Object
  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    city: "New York",
  };
  console.log(person.firstName, person.lastName); // John Doe (menggunakan dot notation)

  // Object Destructuring (untuk menukar posisi harus sesuai dengan nama property yang ada, jika ingin memanggil value dari suatu property)
  const { firstName, lastName, age, city } = person;
  console.log(firstName, lastName, age, city); // John Doe 30 New York

  // Array
  const fruits = ["apple", "banana", "orange", "grape"];
  console.log(fruits[1]); // banana

  // Array Destructuring (tidak memungkinkan untuk menukar posisi array yang ingin di target, hanya memungkinkan membuat nama variabel saja)
  const [arrayPertama, arrayKedua] = fruits;
  console.log(arrayKedua); // banana
  const [b, a] = fruits;
  console.log(b); // apple
}

{
  // ----- Rest Operator ------
  function hitung(a, b, c, ...rest) {
    console.log(rest); // [ 4, 5, 6, 7, 8, 9 ]
  }
  hitung(1, 2, 3, 4, 5, 6, 7, 8, 9);

  // Spread Operator
  const arr = [1, 2, 3, 4, 5];
  const obj = { ...arr };
  console.log(obj, typeof obj); // { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 } object

  // Spread Operator bisa juga di gunakan untuk menggabungkan dua array menjadi satu array
  const char = ["A", "B", "C"];
  const result = [...arr, ...char];
  console.log(result); // [ 1, 2, 3, 4, 5, 'A', 'B', 'C' ]

  //  hal yang sama juga berlaku jika ingin menggabungkan dua object menjadi satu
  const hasil = { ...arr, ...char };
  console.log(hasil); // { '0': 'A', '1': 'B', '2': 'C', '3': 4, '4': 5 }
}

// ----- ECMAScript Module (ES Module) -----
// fitur JavaScript yang berfungsi memungkinkan developer untuk memisahkan kode satu sama lain, tujuan nya agar code tidak redundant(berulang)
// memungkinkan developer untuk menulis kode bisa dengan file yang terpisah
// --- Cara ke-1 ---
import apapunNamaNya from "./helper.js"; // keyword apapunNamaNya mewakili fungsi yang di export pada helper.js
console.log(apapunNamaNya); // [Function: hello]
apapunNamaNya(); // Hello

// --- Cara ke-2 ---
import { helloWorld } from "./helper.js"; // jika memakai keyword export sebelum fungsi maka harus gunakan `{ namaFungsi }`
console.log(helloWorld); // [Function: helloWorld]
helloWorld(); // Hello World

{
  // ----- Ternaries Operator ----- (condition ? true condition : false condition)
  // (merupakan shortcut untuk menuliskan suatu if statement atau pengkondisian)
  function checkWin(isWin) {
    // if statement biasa
    if (isWin) {
      console.log("Kamu Menang");
    } else {
      console.log("Kamu Kalah");
    }
    // Jika menggunakan ternaries operator
    isWin ? console.log("Kamu Menang") : console.log("Kamu Kalah");
  }
  checkWin(true); // Kamu Menang (2x)
}

{
  // ----- Array Method -----
  const people = [
    {
      name: "John",
      age: 27,
      hobbies: ["reading", "hiking", "cooking", "painting"],
    },
    {
      name: "Emily",
      age: 30,
      hobbies: ["gaming", "cooking", "photography"],
    },
    {
      name: "Sarah",
      age: 20,
      hobbies: ["dancing", "swimming", "gardening", "cooking"],
    },
  ];
  // --- Array Method: Find ---
  const find = people.find((a) => a.name === "John"); // (a) merupakan satu parameter `bisa bebas nama nya namun jelas` berupa fungsi yang mewakili masing masing object yang berada dalam array, digunakan juga untuk memudahkan code terbaca oleh developer lain
  console.log(find); // { name: 'John', age: 27, hobbies: [ 'reading', 'hiking', 'painting' ] }

  // --- Array Method: Includes ---
  // berfungsi untuk mencari apakah array itu, salah satu nya ada berupa nilai yang ingin kita cari

  // --- Array Method: Some --- (mengembalikan nilai boolean 'true/false') cocok untuk mengecek apakah dalam suatu property suatu object terdapat value array berupa "cooking"
  const some = people.some((person) => person.hobbies.includes("cooking")); // (person) merupakan satu parameter `bisa bebas nama nya namun jelas` berupa fungsi yang mewakili masing-masing object yang berada dalam array, digunakan juga agar code mudah di baca oleh developer lain
  console.log(some); // true

  // --- Array Method: Every --- (mengembalikan nilai boolean 'true/false') cocok untuk mengecek keseluruhan nilai dari seluruh property yang ingin di cek, dalam kasus di bawah, mengecek secara keseluruhan apakah orang-orang mempunyai hobi yang sama, yaitu 'cooking'
  const every = people.every((person) => person.hobbies.includes("cooking"));
  console.log(every); // true

  //  --- Array Method: Map ---
  const rajawaliGroup = [
    {
      name_lengkap: "John",
      age_nya: 25,
    },
    {
      name_lengkap: "Emily",
      age_nya: 30,
    },
    {
      name_lengkap: "Sarah",
      age_nya: 20,
    },
  ];
  // normalisasi data, supaya data nya bisa kita gunakan dengan mudah, ketika developer ingin implementasi pada react komponen
  const transformed = rajawaliGroup.map((person) => ({
    nama: person.name_lengkap,
    umur: person.age_nya,
  }));

  console.log(transformed);
  /**
   * output:
   * [
   *  { nama: 'John', umur: 25 },
   *  { nama: 'Emily', umur: 30 },
   *  { nama: 'Sarah', umur: 20 }
   * ]
   */

  // jika ingin mengolah terlebih dahulu data-nya, sebelum di lempar menjadi objek yang sudah kita normalisasi, maka developer tidak bisa menggunakan parentheses seperti keunggulan dari arrow function
  // maksudnya: `const transformed = rajawaliGroup.map(person => ())` maka sebagai ganti nya,
  // gunakan `const transformed = rajawaliGroup.map(person => {})`, sebagai hasil nya di berikan keyword return
  const transformasi = rajawaliGroup.map((person) => {
    const nama = `Hallo Nama saya ${person.name_lengkap}`;
    return {
      nama: nama,
      umur: person.age_nya,
    };
  });
  console.log(transformasi);
  /**
   * output:
   * [
   *  { nama: 'Hallo Nama saya John', umur: 25 },
   *  { nama: 'Hallo Nama saya Emily', umur: 30 },
   *  { nama: 'Hallo Nama saya Sarah', umur: 20 },
   * ]
   */

  // ----- Perbedaan `find` dengan `filter` -----
  // (find: hanya mengembalikan satu buah object, berbeda dengan filter: akan mengembalikan beberapa object dalam bentuk array yang ada value 'cooking')
  const temukan = people.find((person) => person.hobbies.includes("cooking"));
  console.log(temukan); // output: { name: 'John', age: 27, hobbies: [ 'reading', 'hiking', 'cooking', 'painting' ] }

  // (mirip dengan find, perbedaan nya terdapat pada output, find output nya hanya satu, namun filter output-nya beberapa dan dalam bentuk array kembali, bukan object)
  // Array Method: Filter
  const filter = people.filter((person) => person.hobbies.includes("cooking"));
  console.log(filter);
  /**
   * output:
   * [
   *    {
   *      name: 'John',
   *      age: 27,
   *      hobbies: [ 'reading', 'hiking', 'cooking', 'painting' ]
   *    },
   *    {
   *      name: 'Emily',
   *      age: 30,
   *      hobbies: [ 'gaming', 'cooking', 'photography' ]
   *    },
   *    {
   *      name: 'Sarah',
   *      age: 20,
   *      hobbies: [ 'dancing', 'swimming', 'gardening', 'cooking' ]
   *    },
   * ]
   */
}

{
  // Nullish Operator ( cara lain untuk menulis logic `||` pada JavaScript)
  const price = 0 || 1000;
  console.log(price); // 1000

  const harga = 0 ?? 1000;
  console.log(harga); // 0

  /**
   * --- Falsy Value ---
   * 1. false
   * 2. 0, 0-, and On
   * 3. "", '' (empty strings)
   * 4. null, undefined and NaN
   * 5. document.all
   */
}

{
  // ------ Optional Chaining ------

  // misal seorang front-end menerima data dari back-end seperti ini
  // data yang rapih dan selalu ada value
  const people = [
    {
      name: "John",
      age: 25,
      hobbies: ["reading", "hiking", "cooking"],
    },
    {
      name: "Emily",
      age: 30,
      hobbies: ["gaming", "cooking", "photography"],
    },
    {
      name: "Sarah",
      age: 20,
      hobbies: ["dancing", "gardening"],
    },
  ];
  const umur = people[1].age;
  console.log(umur); // 30

  // namun, apa yang terjadi apabila back-end mengasih data yang mengembalikan nilai `undefined`?
  const orang = undefined;
  // const age = orang[1].age;
  // console.log(age); // TypeError: Cannot read properties of undefined (reading '1')

  // jika memakai optional chaining, berikan `?` atau optional chaining di setiap nama Array dan urutan index, yang ingin kita cek nilai nya
  const age = orang?.[1]?.age;
  console.log(age); // undefined
}

{
  // ----- Async Await -----
  /**
   * JavaScript memiliki keunggulan yaitu, mengeksekusi kode secara paralel (paralel = sesuatu yang berjalan atau berlangsung bersamaan, dalam jalur yang sejajar atau sejajar satu sama lain.)
   *  - Maka dari itu JavaScript menyediakan fitur bernama asynchronous code, apa itu asynchronous code?
   *    - asynchronous code, yaitu kode yang memungkinkan untuk mulai berjalan terlebih dahulu atau mungkin berjalan secara bersamaan, tanpa menghalangi eksekusi program kode yang akan di tulis selanjutnya.
   * Analogi: https://docs.google.com/document/d/1TOMMh99BA6kU_GWzERT7-_tHDBtG5QEtrAUiQmH-3uQ/edit?usp=sharing
   *
   */
  // secara default JavaScript selalu mengeksekusi kode secara Syncronous atau Berurutan

  // versi 1 - sebelum
  function getData() {
    const data = fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(data);
  }
  console.log(getData()); // Promise { <pending> }
  // apa arti data promise? sebenarnya, si data belum selesai mengeksekusi, namun console.log udah terburu-buru mengeluarkan hasilnya seperti apa, terjadilah Promise { <pending> } undefined

  // versi 2 - sesudah menggunakan async await
  async function ambilData() {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(data);
  }
  ambilData();
  /**
   * akan menampilkan output berupa response dari back-end, yang bisa di olah selanjutnya
   * Response {
   * status: 2000,
   * statusText: 'OK',
   */
}
