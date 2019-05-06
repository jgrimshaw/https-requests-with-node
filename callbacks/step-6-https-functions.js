
var https = require('https');


function getHTML (options, callback) {


https.get(options, function (response){
  var string = '';
   response.setEncoding('utf8');

   response.on('data', function (chunk){
    string += chunk
    printHTML(chunk)
    console.log(chunk.length + "\n");

   });
  });
}


function printHTML (html) {
  console.log(html);
}


module.exports = getHTML;