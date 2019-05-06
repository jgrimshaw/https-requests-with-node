
var https = require('https');
var getHTML = require('./step-5-https-functions.js');
var printHTML = require('./step-5-https-functions.js');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step5.html'
};





getHTML(requestOptions, printHTML)