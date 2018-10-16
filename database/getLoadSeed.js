const fs = require('fs');
const path = require('path');
const faker = require('faker');

function createLoaderIoJson() {
  let jsonObj = {
    keys: ['id'],
    values: [],
  }

  for (let i = 9000000; i <= 9200000; i++) {
    let row = [];
    row.push(i);
    // row.push(faker.commerce.productAdjective());
    // row.push(faker.database.column())
    // row.push(faker.company.companyName())
    // row.push(faker.lorem.word());
    // row.push(faker.image.fashion());

    jsonObj.values.push(row);
  }

  fs.writeFile('./data/getLoader.json', JSON.stringify(jsonObj), 'utf8', (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('done');
    }
  })
}

createLoaderIoJson();