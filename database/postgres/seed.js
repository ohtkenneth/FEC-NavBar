const faker = require('faker');
const insert = require('./models').insertSearch;

for (let i = 0; i <= 100000; i++) {
  const randSearch = faker.commerce.productName();
  const randBrand = faker.company.companyName();

  insert(randBrand, randSearch)
    .then(() => console.log(`inserted ${randBrand}, ${randSearch}`))
    .catch(err => console.log(err));
}