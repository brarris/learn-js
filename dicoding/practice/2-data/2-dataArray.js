'use strict';

const array = [1, 2];
// console.log(typeof array);

const users = new Array();
// console.log(users); // karena belum memiliki element

/* Menggunakan sintaks Array.from */
{
  const foo = Array.from('fofo');
  // console.log(foo); // output: ['f','o','f','o']
}

// Menyalin Array
{
  const users = new Array('John', 'Jane', 'Jack', 'Jill');
  const customer = Array.from(users);
  // console.log(customer); // output: [ 'John', 'Jane', 'Jack', 'Jill' ]
}

/* Menggunakan array literal (object literals) */
{
  const fruits = ['apple', 'banana', 'cherry', '', 'grape'];
  // console.log(fruits); // output: [ 'apple', 'banana', 'cherry', '', 'grape' ]
}

/* Mengakses element array */
{
  const myArray = [32, 55, 30];
  // console.log(myArray[1]); // 55
}

/* Manipulasi nilai array */
{
  let myArray = [1, 2, 3, 4, 5];
  myArray[1] = 10;
  // console.log(myArray); // [1, 10, 3, 4, 5]
}

/* Menambahkan nilai menggunakan push */
{
  let myArray = [1, 2, 3, 4, 5];
  myArray.push(6);
  // console.log(myArray); // [ 1, 2, 3, 4, 5, 6 ]
}

/* Menghapus element dan data array */
{
  let myArray = ['Android', 'Data Sacience', 'Web'];
  // delete myArray[1]; // data berhasil dihapus namun element array nya masih ada

  // console.log(myArray); // [ 'Android', <1 empty item>, 'Web' ]
  
  myArray.splice(1, 1); // method splice untuk menghapus element beserta data dalam array
  // console.log(myArray); // [ 'Android', 'Web' ]
}

{
  let myArray = ['Android', 'Data Science', 'Web'];
  myArray.splice(1, 2); // splice membutuhkan dua parameter yaitu indeks dari element yang ingin dihapus dan jumlah element yang ingin dihapus
  // console.log(myArray); // [ 'Android' ]
}

// menggunakan method shift dan pop
{
  let myArray = ['Android', 'Data Science', 'Web'];
  myArray.shift(); // menghapus element dan data array pada urutan paling awal (0)
  // console.log(myArray); // [ 'Data Science', 'Web' ]
}

{
  let myArray = ['Android', 'Data Science', 'Web'];
  myArray.pop(); // menghapus element dan data array pada urutan paling akhir
  // console.log(myArray); // [ 'Android', ''Data Science ]
}

/* array destructuring */
{
  const introduction = ['Hello', 'Arsy'];
  const [greeting, name] = introduction;
  // console.log(greeting); // Hello
}

/* array method */
{
  // menggunakan method reverse
  {
    const myArray = ['Android', 'Data Science', 'Web'];
    myArray.reverse(); // method reverse untuk membalikkan nilai array
    console.log(myArray); // [ 'Web', 'Data Science', 'Android' ]
  }
}

{
  // menggunakan method sort
  const myArray = [ 'Data Science', 'Web', 'Android' ];
  myArray.sort(); // method sort untuk mengurutkan nilai array bedasarkan urutan alfabet
  console.log(myArray);
}