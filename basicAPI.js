const data = require('./data'); //importing data from data.js file
const http = require('http');

http.createServer((req,res)=>{
  res.writeHead(200,{'Content-Type' : 'application/json'}); //200 here ---> status code
  res.write(JSON.stringify(data));
  res.end();
}).listen(4500);