var https = require('https');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
};

function getAndPrintHTML(options){

https.get(requestOptions, function(response){
  response.setEncoding('utf8')

  var string = ''
  response.on('data', function(chunk){
    console.log('Chunk received. Length: ', chunk.length)
    string += chunk
    console.log(chunk.length)
    console.log(chunk + '\n')
  })

})
}

getAndPrintHTML()