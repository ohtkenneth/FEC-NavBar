const perf = require('execution-time')();
const models = require('../database/postgres/models');

const TEST_TABLE = 'testing';

describe('postgres', () => {
  beforeAll(() => {
    return models.createTestTable(TEST_TABLE);
  });
  afterAll(() => {
    return models.dropTable(TEST_TABLE);
  });

  test('should be able to insert a new row', (done) => {
    return models.insertRow(TEST_TABLE, 1, 'testLoc', 'testSize', 'testBrand', 'testSeason', 'testurl.com')
      .then(result => {
        expect(result).toHaveProperty('rowCount', 1);
        done();
      });
  });

  test('should be able to update a row', (done) => {
    const data = {
      location: 'newLoc',
      size: 'newSize',
      brand: 'newBrand',
      season: 'newSeason',
      url: 'newurl.com',
    };
    return models.updateRow(TEST_TABLE, 1, data)
      .then(result => {
        expect(result).toBe(1);
        done();
      });
  });

  test('should be able to delete a row', (done) => {
    return models.deleteRow(TEST_TABLE, 1)
      .then(result => {
        expect(result).toBe(1);
        done();
      });
  });
});