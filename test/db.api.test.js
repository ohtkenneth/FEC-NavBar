const request = require('supertest');
const app = require('../server/index');

describe('api', () => {
  test('it should be able to get an ad', async function(done) {
    request(app)
      .get('/product/ads?id=1')
      .expect(200)
      .end((err, res) => {
        console.log(err);
        done();
      });
  });

  test('it should be able to POST an ad', async function(done) {
    const data = { 
      id: 1,
      location: 'newLoc', 
      size: 'newSize', 
      brand: 'newBrand',
      season: 'newSeason',
      url: 'newurl.com',
    };

    request(app)
      .post('/product/ads')
      .send(data)
      .expect('Content-Type', /json/)
      .expect((res) => {
        res.body.ok = 1
      })
      .expect(200, done);
  });
});
