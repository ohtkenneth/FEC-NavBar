const path = require('path');
const fs = require('fs');
const perf = require('execution-time')();
const faker = require('faker');

const times = 100;

const dataWriteStream = fs.createWriteStream('./data/data.tsv', {
  flags: 'a',
  encoding: 'utf8',
});

// fs.writeFileSync('./data/data.tsv', 'id\tsearch\tbrand\t\n');

dataWriteStream.on('open', () => {
  console.log('Writing data...');
  perf.start();
  let million = 1;
  for (let row = 1; row <= times; row++) {
    dataWriteStream.write(`${row}\t${faker.commerce.productName()}\t${faker.company.companyName()}\n`, 'utf8');
    if (row % 1000000 === 0) {
      console.log(`Writing ${million},000,000 of 10,000,000 rows`);
      million += 1;
    }
  }
  dataWriteStream.end();
  const results = perf.stop();
  console.log('writeData execution time: ' + (results.time / 1000).toFixed(5));  
});


// for (let streams = 1; streams <= 10; streams++) {
  // const dataWriteStream = fs.createWriteStream('./data/data.tsv', {
  //   flags: 'a',
  //   encoding: 'utf8',
  // });
//   // console.log(`Starting stream ${streams + 1} of 10`);
//   for (let i = 1; i <= times; i++) {
    // dataWriteStream.write(`${i}\t${faker.commerce.productName()}\t${faker.company.companyName()}\n`, 'utf8');
    // if (i % times === 0) {
    //   console.log(`Writing ${streams},000,000 of 10,000,000 rows`);
    // }
//   }
//   dataWriteStream.end();
// }
// const results = perf.stop();
// console.log('writeData execution time: ' + (results.time / 1000).toFixed(5));  