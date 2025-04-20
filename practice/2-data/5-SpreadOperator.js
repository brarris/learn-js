'use strict';

/* Spread Operator pada object */
{
  const obj1 = {name: 'Dicoding'};
  const obj2 = {lastName:'Indonesia', address: 'Jl. Batik Kumeli No 50'};
  const newObj = {...obj1, ...obj2};

  // console.log(newObj);
  /**{
        name: 'Dicoding',
        lastName: 'Indonesia',
        address: 'Jl. Batik Kumeli No 50'
      }
   */
  
  // spread operator dapat menggabungkan dua object, atau lebih.
}

{
  const originalObj = {name: 'Dicoding', age: 9};
  const copiedObj = {...originalObj};
  // console.log(copiedObj);
  // { name: 'Dicoding', age: 9 }
  // spread operator juga dapat menyalin object
}

/* Spread operator pada array */
{
  const array1 = ['Dicoding'];
  const array2 = ['Indonesia', 'Jl. Batik Kumeli No 50'];
  const newArray = [...array1, ...array2];

  // console.log(newArray); // spread operator untuk menggabungkan array
  // [ 'Dicoding', 'Indonesia', 'Jl. Batik Kumeli No 50' ]
}

{
  const original = ['Apple', 'Banana', 'Cherry'];
  const copy = [...original];

  // console.log(copy); // juga bisa digunakan untuk menyalin array
  // [ 'Apple', 'Banana', 'Cherry' ]
}