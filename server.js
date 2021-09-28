var http = require("http");
var a =20;
var b = 40;
var c = a+b;
var msg = "a value is "+a+ "B value is"+b+ "sum is"+c;
 http.createServer(function(req,res)
 {
        // res.writeHead(200,{'content-Type':'text/plain'});

        res.end('<h1>Hello world in node</h1>'+msg);
}).listen(8081);
console.log('server running at http://127.0.0.1:8081');