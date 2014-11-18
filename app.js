var http = require('http'),
    url =  require('url'),
    mime = require('mime'),
    fs = require('fs'),
    base = 'files';

http.createServer(function(req, res){

    pathname = base +req.url;
    console.log(pathname);

    fs.stat(pathname,  function(err, stats){
      if(err){
        res.writeHead(404);
        res.write('bad request 404\n');
        res.end();
      }else if(stats.isFile()){
        // content type
        var type = mime.lookup(pathname);
        console.log(type);

        //200 status - found erros
        res.statusCode = 200;

        //create and pipe readable stream
        var file = fs.createReadStream(pathname);

        file.on("open", function(err){
          file.pipe(res);

        });
        file.on("error", function(err){
          console.log(err);
        });
      }else{
        res.writeHead(403);
        res.write('Directory access is forbidden');
        res.end();
      }
    });
}).listen(8000);
console.log('server is runing at 8000');
