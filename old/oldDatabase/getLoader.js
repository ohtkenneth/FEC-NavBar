const fs = require('fs');

// function to generate loaderio GET stress test mock data
function createLoaderIoJson() {
  let jsonObj = {
    keys: ['id'],
    values: [],
  };

  for (let i = 0; i < 300000; i++) {
    let row = [];
    const randId = Math.floor(Math.random() * 10000000) + 1;
    row.push(randId);

    jsonObj.values.push(row);
  }

  fs.writeFile('./getLoader.json', JSON.stringify(jsonObj), 'utf8', (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('done');
    }
  });
}

createLoaderIoJson();