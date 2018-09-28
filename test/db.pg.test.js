const perf = require('execution-time')();
const models = require('../database/postgres/models');

const TEST_TABLE = 'testing';
const threshold = 15;

describe('postgres', () => {
  beforeAll(() => {
    return models.createTestTable(TEST_TABLE);
  });
  afterAll(() => {
    return models.dropTable(TEST_TABLE);
  });

  test('should be able to insert a new row', (done) => {
    return models.insertRow(TEST_TABLE, 1, 'testLoc', 'testSize', 'testurl.com')
      .then(result => {
        expect(result).toHaveProperty('rowCount', 1);
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

  test(`should be able to insert a row below ${threshold}ms`, (done) => {
    perf.start();
    models.insertRow(TEST_TABLE, 2, 'testLoc', 'testSize', 'testurl.com')
      .then(result => {
        const { time } = perf.stop();

        expect(result).toHaveProperty('rowCount', 1);
        expect(time).toBeLessThan(threshold);
        done();
      });
  });

  test(`should be able to delete a row below ${threshold}ms`, (done) => {
    perf.start();
    models.deleteRow(TEST_TABLE, 2)
      .then(result => {
        const { time } = perf.stop();

        expect(result).toBe(1);
        expect(time).toBeLessThan(threshold);
        done();
      });
  });
});