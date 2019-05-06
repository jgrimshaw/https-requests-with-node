var https = require('https');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
};

function getHTML(options, callback){

https.get(requestOptions, function(response){
  response.setEncoding('utf8')

  var string = ''
  response.on('data', function(chunk){
    // console.log('Chunk received. Length: ', chunk.length)
    string += chunk
    printHTML(chunk)

    console.log(chunk.length)
    console.log(chunk + '\n')
  })
})
}

function printHTML (html) {
  console.log(html);
}


getHTML()