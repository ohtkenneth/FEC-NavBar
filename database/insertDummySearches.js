const { search, photo } = require('./models.js');
const dummy = require('./dummyData.json');
const dummyAds = require('./adDataUrls.json');

var insert = () => {
  search.collection.insert(dummy, (err, result) => {
    if (err) {
      console.log('Some error happened: ', err);
    } else {
      console.log('dummy searches inserted', result);
    }
  });
};
var insertAds = () => {
  photo.collection.insert(dummyAds, (err, result) => {
    if (err) {
      console.log('Could not enter in dummyAds', err);
    } else {
      console.log('ads were added', result);
    }
  });
};

insert();
insertAds();
