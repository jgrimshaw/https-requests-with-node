var getHTML = require('./step-6-https-functions.js');


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printHTML (html) {
 console.log(html.reverse());
}

getHTML(requestOptions, printHTML);