const fs = require('fs');
const faker = require('faker');

// function to generate loaderio POST stress test mock data
function createLoaderIoJson() {
  let jsonObj = {
    keys: ['id', 'location', 'size', 'brand', 'season', 'url'],
    values: [],
  };

  for (let i = 10000001; i < 10020000; i++) {
    let row = [];
    row.push(i);
    row.push(faker.commerce.productAdjective());
    row.push(faker.database.column());
    row.push(faker.company.companyName());
    row.push(faker.lorem.word());
    row.push(faker.image.fashion());

    jsonObj.values.push(row);
  }

  fs.writeFile('./data/loader.json', JSON.stringify(jsonObj), 'utf8', (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('done');
    }
  });
}

createLoaderIoJson();