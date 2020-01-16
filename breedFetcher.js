const request = require('request');

const catFetcher = function(address, breed, callback) {
  request(address += breed, (error, response, body) => {
   
    if (error) {
      console.log('error:', error);
    } else if (body === '[]') {
      console.log('ERROR: Invalid resource/page');
    } else {
      callback(body);
    }
  });
};

const printBreedInfo = function(body) {
  const obj = JSON.parse(body);
  console.log(obj[0]['description']);
};

let arg = process.argv;
const breed = arg.slice(2)[0];

catFetcher('https://api.thecatapi.com/v1/breeds/search?q=', breed, printBreedInfo);