const config = require('../config').db;
const mongoose = require('mongoose');
const models = require('../database/mongo/models');
const perf = require('execution-time')();

const threshold = 100;
const testId = 10000001;

describe('mongodb', () => {
  beforeAll(() => {
    return mongoose.connect(`mongodb://${config.serverIp}/${config.name}`);
  });
  afterAll((done) => {
    // DO NOT DROP DATABASE, USING WITH MOCK DATA
    return mongoose.disconnect(done);
  });

  test(`should be able to insert a document below ${threshold}ms`, async function(done) {
    perf.start();
    return models.createAd(testId, 'testLoc', 'testSize', 'testBrand', 'testSeason', 'testurl.com')
      .then(result => {
        const { time } = perf.stop();

        expect(result).toHaveProperty('_id');
        expect(time).toBeLessThan(threshold);
        done();
      });
  });

  test(`should be able to find a document below ${threshold}ms`, async function(done) {
    perf.start();
    return models.findAd(testId)
      .then(result => {
        const { time } = perf.stop();

        expect(result).toHaveProperty('_id');
        expect(time).toBeLessThan(threshold);
        done();
      });
  });

  test(`should be able to update a document below ${threshold}ms`, async function(done) {
    let updateData = { 
      location: 'newLoc', 
      size: 'newSize', 
      brand: 'newBrand',
      season: 'newSeason',
      url: 'newurl.com' 
    };
    perf.start();
    return models.updateAd(testId, updateData)
    .then(result => {
      const { time } = perf.stop();
      
      expect(result).toHaveProperty('n', 1);
      expect(result).toHaveProperty('nModified', 1);
      expect(result).toHaveProperty('ok', 1);
      expect(time).toBeLessThan(threshold);
      done();
    });
  });

  test(`should be able to delete a document below ${threshold}ms`, async function(done) {
    perf.start();
    return models.deleteAd(testId)
      .then(result => {
        const { time } = perf.stop();

        expect(result).toHaveProperty('n', 1);
        expect(result).toHaveProperty('ok', 1);
        expect(time).toBeLessThan(threshold);
        done();
      });
  });
});