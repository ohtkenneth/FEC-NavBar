const perf = require('execution-time')();
const models = require('../database/postgres/models');

const TEST_TABLE = 'testing';
const threshold = 15;

describe('postgres optimization', () => {
  beforeAll((done) => {
    return models.createTestTable(TEST_TABLE)
      .then(() => done());
  });
  afterAll((done) => {
    return models.dropTable(TEST_TABLE)
      .then(() => done());
  });

  test(`should be able to insert a row below ${threshold}ms`, done => {
    perf.start();
    models.insertRow(TEST_TABLE, 2, 'testLoc', 'testSize', 'testurl.com')
      .then(result => {
        const { time } = perf.stop();

        expect(result).toHaveProperty('rowCount', 1);
        expect(time).toBeLessThan(threshold);
        done();
      });
  });

  test(`should be able to update a row below ${threshold}ms`, done => {
    perf.start();
    const data = {
      location: 'newLoc2',
      size: 'newSize2',
      url: 'newurl2.com',
    };

    models.updateRow(TEST_TABLE, 2, data)
      .then(result => {
        const { time } = perf.stop();

        expect(result).toBe(1);
        expect(time).toBeLessThan(threshold);
        done();
      });
  });

  test(`should be able to delete a row below ${threshold}ms`, done => {
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