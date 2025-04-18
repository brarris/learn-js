'use strict';

const products = { name: 'Sepatu', price: 230000 };
// console.log(products);

const user = {
  name: 'Dicoding',
  'last name': 'Indonesia',
  age: 9,
};

// console.log(user);
// console.log(user.name);
// console.log(user['last name']);

{
  const user = {
    'name': 'Dicoding',
    'lastName': 'Indonesia',
    age: 9,
  };

  const { name, lastName, isMale = false } = user;
  // console.log(name, lastName);
  // console.log(isMale);
  
}

{
  const user = {
    id: 24,
    email: 'aras@dicoding.com',
    name: 'Arsy',
    nickname: 'Aras',
    username: 'aras123',
    password: 'secret',
  };

  /* dengan dectructuring */
  // const { id, email } = user;
  // console.log(id, email);
  
  /* tanpa dectructuring */
  const id = user.id;
  const email = user.email;

  // console.log(id, email);
}

/* Mengubah Nilai di Properti Object */
{
  const account = {
    balance: 1000,
    debt: 10,
  };

  account.balance = 2000;
  // console.log(account.balance);
  
}

/* Menghapus properti di Object */
{
  const user = {
    'name': 'Dicoding',
    'last name': 'Indonesia',
    age: 9,
  };

  // delete user.age;
  console.log(user);

  /* Selain dot notation (.), bisa menggunakan operator delete dengan tanda kurung siku [] */
  delete user['age'];
  console.log(user);
}