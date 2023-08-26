const express = require('express');
const mongdb = require('mongodb')
const dbconnect = require('./mongoDB/mongodbConnection');
const app = express();

app.use(express.json());

app.get('/',async (request,response)=>{
   let data = await dbconnect();
   data = await data.find().toArray();
   console.log(data);
   response.send(data);
});

app.post('/',async(request,response)=>{
    let data = await dbconnect();
    let result = await data.insertOne(request.body);
    response.send(result)
});

app.put('/',async (request,response)=>{
   let data = await dbconnect();
   let result = await data.updateOne(
    {name:request.body.name},
    {$set:request.body},
    )
   response.send({name:"riya"})
});

app.delete('/:id',async (request,response)=>{
   let data = await dbconnect();
   let result = await data.deleteOne({_id:new mongdb.ObjectId(request.params.id)})
   response.send(result);
});


app.listen(4500);