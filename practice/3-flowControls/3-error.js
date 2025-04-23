'use strict';

/* throwing error */
{
  const error = new Error('sedang terjadi error');
  // console.error(error);
}

{
  const price = 100;
  const paid = 80;

  if(paid < price){
    // throw new Error('Pembayaran kurang')
  }
}


/* catching error */
// sebelumnya pada throw error sudah tau cara untuk membangkitkan error
// pada catching error saat nya mengetahui cara untuk menangkap error/menangani error

{
  // try-catch
  try{
    // console.log('Memulai program');
    // console.log('Mengakhiri program');
  } catch (err) {
    // console.log('Karena tidak ada error, blok ini akan diabaikan')
  }

  /**
   * output:
   * Memulai program
   * Mengakhiri program
   */
}

{
  try {
    console.log('Memulai program');
    throw new Error('Error: program berhenti');
    console.log('Mengakhiri program');
  } catch (err) {
    console.log('Karena ada error, blok ini akan dieksekusi');
  }

  /**
   * output:
   * Memulai program
   * Karena ada error, blok ini akan dieksekusi
   */
}


/* finally */
{
  // finally
  try{
    console.log('Ini try block');
  } catch (err) {
    console.log('Ini catch block');
  } finally {
    console.log('Ini finally block');
  }
  /**
   * output:
   * Ini try block
   * Ini finally block
   */
}

{
  try {
    console.log('Ini try block');
    throw new Error('Error: Program berhenti');
  } catch (err) {
    console.log('Ini catch block');
  } finally {
    console.log('Ini finally block');
  }
  /**
   * output:
   * Ini try block
   * Ini catch block
   * Ini finally block
   */
}