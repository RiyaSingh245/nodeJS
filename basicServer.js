//http, a core module, required to make server, in nodeJS http handles request and response of server
const http = require('http') 
http.createServer((req,res)=>{
   res.writeHead(200, {'Content-Type' : 'application/json'})
   res.write(JSON.stringify({name : 'Riya', email : 'riya123@.com'}));
   res.end();
}).listen(4200);