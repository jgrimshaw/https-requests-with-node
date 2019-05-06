var https = require('https');

function getAndPrintHTML(){

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
};

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
