/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');
var http = require('http');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback){
  var err = { code: 'ENOENT' };

  fs.readFile(filePath, (err, data) => {
    if (!data) {
      callback(err, data);
    } else {
      var mydata = data.toString();
      var i = mydata.indexOf('\n');
      var firstLine = mydata.slice(0,i);

      callback(err, firstLine);
    }
  })

};
// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {

  request(url, (error, response, body) => {
    if (error) {
      error = {message: 'Invalid URI'};
      callback(error);
      return error.message;
    } else if (!error && response.statusCode === 200){
      callback(error, 200);
    }
  });

};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
