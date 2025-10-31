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
  // Rest Operator
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
