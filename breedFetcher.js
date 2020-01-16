const request = require('request');

const fetchBreedDescription = function(breed, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breed, (error, response, body) => {
   
    if (error) {
      callback(error,null);
    } else if (body === '[]') {
      error = 'Requested breed could not be found';
      callback(error, null);
    } else {
      let desc = JSON.parse(body)[0]['description'];
      desc = desc.slice(0, -1);
      callback(null, desc);
    }
  });
};

module.exports = { fetchBreedDescription };