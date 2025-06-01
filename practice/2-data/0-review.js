'use strict';

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
 *  Menstrukturkan Data dengan ARRAY
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
