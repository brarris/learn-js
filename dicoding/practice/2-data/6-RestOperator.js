'use strict';

{
  function myFunc(...manyMoreArgs) {
    console.log('manyMoreArgs', manyMoreArgs);
  }

  // myFunc('one', 'two', 'three'); // manyMoreArgs [ 'one', 'two', 'three' ]
  // rest operator digunakan jika fungsi memiliki lebih dari satu argumen
}

{
  function myFunc(number, ...manyMoreArgs){
    console.log('number', number);
    console.log('manyMoreArgs', manyMoreArgs);
  }

  // myFunc('one', 'two', 'three');
  /**
   * number one
   * manyMoreArgs [ 'two', 'three' ]
   */
}

// karena rest parameter menangani argument sebagai array, method array.length juga dapat digunakan para rest parameter

{
  function myFunc(...manyMoreArgs) {
    console.log(manyMoreArgs.length);
    console.log('manyMoreArgs', manyMoreArgs);
  }
  
  // myFunc('one', 'two', 'three');
  /**
   * 3
   * manyMoreArgs [ 'one', 'two', 'three' ]
   */
}

{
  const favorites = ['Nasi Goreng', 'Mie Goreng', 'Ayam Bakar', 'Tahu', 'Tempe'];

  const [first, second, ...rest] = favorites;

  console.log(first);
  console.log(second);
  console.log(rest);

  /**
   * output:
   * Nasi Goreng
   * Mie Goreng
   * [ 'Ayam Bakar', 'Tahu', 'Tempe' ]
   */
}