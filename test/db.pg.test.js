const perf = require('execution-time')();
const models = require('../database/postgres/models');

const TEST_TABLE = 'testing';

describe('postgres', () => {
  beforeAll((done) => {
    models.createTestTable(TEST_TABLE)
      .then(() => done());
  });
  afterAll((done) => {
    models.dropTable(TEST_TABLE)
      .then(() => done());
  });

  test('should be able to insert a new row', async function(done) {
    models.insertRow(TEST_TABLE, 1, 'testLoc', 'testSize', 'testBrand', 'testSeason', 'testurl.com')
      .then(result => {
        expect(result).toHaveProperty('rowCount', 1);
        done();
      });
  });

  test('should be able to update a row', async function(done) {
    const data = {
      location: 'newLoc',
      size: 'newSize',
      brand: 'newBrand',
      season: 'newSeason',
      url: 'newurl.com',
    };
    models.updateRow(TEST_TABLE, 1, data)
      .then(result => {
        expect(result).toBe(1);
        done();
      });
  });

  test('should be able to delete a row', async function(done) {
    models.deleteRow(TEST_TABLE, 1)
      .then(result => {
        expect(result).toBe(1);
        done();
      });
  });
});