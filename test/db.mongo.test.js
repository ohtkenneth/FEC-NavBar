const config = require('../config').db;
const mongoose = require('mongoose');
const models = require('../database/mongo/models');

const threshold = 15;

describe('mongodb', () => {
  beforeAll(() => {
    mongoose.connect(`mongodb://${config.serverIp}/testing`);
  });
  afterAll((done) => {
    // drop database
    mongoose.dropDatabase().disconnect(done);
  });

  test('should be able to create a document', (done) => {
    models.createAd(1, 'testLoc', 'testSize', 'testBrand', 'testSeason', 'testurl.com')
      .then(result => {

        expect(result).toHaveProperty('_id');
        expect(result).toHaveProperty('location', 'testLoc');
        expect(result).toHaveProperty('size', 'testSize');
        expect(result).toHaveProperty('url', 'testurl.com');
        done();
      });
  });

  test('should be able to find a document', (done) => {
    models.findAd(1)
      .then(result => {
        
        expect(result).toHaveProperty('_id');
        expect(result).toHaveProperty('location', 'testLoc');
        expect(result).toHaveProperty('size', 'testSize');
        expect(result).toHaveProperty('url', 'testurl.com');
        done();
      })
  })

  test('should be able to update a document', (done) => {
    let updateData = { 
      location: 'newLoc', 
      size: 'newSize', 
      brand: 'newBrand',
      season: 'newSeason',
      url: 'newurl.com' 
    };

    models.updateAd(1, updateData)
      .then(result => {

        expect(result).toHaveProperty('n', 1);
        expect(result).toHaveProperty('nModified', 1);
        expect(result).toHaveProperty('ok', 1);
        done();
      });
  });
  
  test('should be able to delete a document', (done) => {
    models.deleteAd(1)
      .then(result => {

        expect(result).toHaveProperty('n', 1);
        expect(result).toHaveProperty('ok', 1);
        done();
      });
  });
});