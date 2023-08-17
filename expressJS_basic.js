const express = require('express');
const app = express(); //explicilty executing express

//get method provides route, here first parameter of get (i.e. 'route) is blank --> indicates home page
app.get('',(request,response)=>{
    console.log(`data sent by browser ${request.query.name}`);  //if browser sent any parameter (in URL after ?)
    response.send(`this is home page`);
})            

app.get('/about',(request,response)=>{
    response.send(`this is about page`);
})    

//needed to create a server, to execute above code
app.listen(4500);