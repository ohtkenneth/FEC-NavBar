const faker = require('faker');
// return knex.schema.createTable('searches', (table) => {
//   table.increments('id').primary();
//   table.string('brand');
//   table.string('search');
// });

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('searches').del()
    .then(function () {
      // Inserts seed entries
      // return knex('searches').insert([
      //   {id: 1, colName: 'rowValue1'},
      //   {id: 2, colName: 'rowValue2'},
      //   {id: 3, colName: 'rowValue3'}
      // ]);
      let toInsert = [];
      for (let i = 0; i <= 10000; i++) {
        // const randSearch = faker.commerce.productName();
        // const randBrand = faker.company.companyName();
      
        // insert(randBrand, randSearch)
        //   .then(() => console.log(`inserted ${randBrand}, ${randSearch}`))
        //   .catch(err => console.log(err));
        toInsert.push({
          brand: faker.commerce.productName(),
          search: faker.company.companyName(),
        });
      }
      console.log(toInsert);
      return knex('searches').insert(toInsert);
    });
};
