const path = require('path');
const fs = require('fs');
const perf = require('execution-time')();
const faker = require('faker');

const times = 1000000;

console.log('Writing data...');
perf.start();
const dataWriteStream = fs.createWriteStream('./data/data.tsv', {
  flags: 'a',
  encoding: 'utf8',
});
let rows = [];
// console.log(`Starting stream ${streams + 1} of 10`);
for (let i = 1; i <= times; i++) {
  rows.push(`${i}\t${faker.commerce.productName()}\t${faker.company.companyName()}\n`);
  if (i % 100000 === 0) {
    console.log(`Writing ${i} of ${times} rows`);
  }
  // dataWriteStream.write(`${i}\t${faker.commerce.productName()}\t${faker.company.companyName()}\n`, 'utf8', (status) => {
    
  //   console.log(status)
  // });
  
}
// dataWriteStream.end();
const results = perf.stop();
console.log('writeData execution time: ' + (results.time / 1000).toFixed(5));  


// console.log('Writing data...');
// perf.start();
// for (let streams = 0; streams < 10; streams++) {
//   const dataWriteStream = fs.createWriteStream('./data/data.tsv', {
//     flags: 'a',
//     encoding: 'utf8',
//   });
//   console.log(`Starting stream ${streams + 1} of 10`);
//   for (let i = 1; i <= times; i++) {
//     dataWriteStream.write(`${i}\t${faker.commerce.productName()}\t${faker.company.companyName()}\n`, 'utf8', (status) => {
//       console.log(status)
//     });
//     if (i % 100000 === 0) {
//       console.log(`Writing ${i} of ${times} rows`);
//     }
//   }
//   dataWriteStream.end();
// }
// const results = perf.stop();
// console.log('writeData execution time: ' + (results.time / 1000).toFixed(5));  



// function writeData() {
  // console.log('Writing data...');
  // perf.start();
//   for (let i = 1; i <= times; i++) {
//     // create sql row tab delimited columns
//     const row = `${i}\t${faker.commerce.productName()}\t${faker.company.companyName()}\n`;
//     try {
//       fs.appendFileSync('./data/data.tsv', row);
//       if (i % 1000000 === 0) {
//         console.log(`Row ${i} of ${times} created`);
//       }
//     } catch(err) {
//       console.log(err);
//     }
//   }
  // const results = perf.stop();
  // console.log('writeData execution time: ' + (results.time / 1000).toFixed(5));  
// }

// writeData();