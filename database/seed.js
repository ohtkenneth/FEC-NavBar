const path = require('path');
const fs = require('fs');
const perf = require('execution-time')();
const faker = require('faker');
const dataWriteStream = fs.createWriteStream('./data/data.tsv', {
  flags: 'a',
  encoding: 'utf8',
});

let times = 10000000;
let row = 1;
console.log('Writing data...');

function writeData() {
  let ok = true;
  do {
    row++;
    if (row === times) {
      // last time to write
      dataWriteStream.write(`${row}\t${faker.commerce.productAdjective()}\t${faker.database.column()}\t${faker.image.fashion()}\n`, 'utf8');
      const results = perf.stop();
      console.log('writeData execution time: ' + (results.time / 1000).toFixed(5)); 
    } else {
      // see if should continue or wait for backpressure
      ok = dataWriteStream.write(`${row}\t${faker.commerce.productAdjective()}\t${faker.database.column()}\t${faker.image.fashion()}\n`, 'utf8');
      if (row % 1000000 === 0) {
        console.log(`Wrote ${row} of 10,000,000 rows`);
      }
    }
    // while still have entires and no backpressure
  } while (row <= times && ok) {
    if (row <= times) {
      // had to stop early
      dataWriteStream.once('drain', writeData);
    }
  }
}

perf.start();
writeData();

// dataWriteStream.on('open', () => {
//   console.log('Writing data...');
//   perf.start();
//   let million = 1;
//   for (let row = 1; row <= times; row++) {
//     dataWriteStream.write(`${row}\t${faker.commerce.productAdjective()}\t${faker.database.column()}\t${faker.image.fashion()}\n`, 'utf8');
    // if (row % 1000000 === 0) {
    //   console.log(`Writing ${million},000,000 of 10,000,000 rows`);
    //   million += 1;
    // }
//   }
//   dataWriteStream.end();
  // const results = perf.stop();
  // console.log('writeData execution time: ' + (results.time / 1000).toFixed(5));  
// });