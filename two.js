
var http=require('http');

var fs=require('fs');

var server=http.createServer(function(request, response) {

response.writeHead(200, {'Content-Type': 'text/html'})

fs.readFile('C:/Users/Nyasha/WebstormProjects/untitled/index.html', function(error, contents){

response.end(contents);

})

});

server.listen(8000);

console.log('server started');