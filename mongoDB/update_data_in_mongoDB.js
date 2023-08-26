const dbconnect = require('./mongodbConnection');

const updateData = async ()=>{
   let data = await dbconnect();
   let result = await data.updateOne(
    {name:'v5'},
    {$set : {name:'v5 pro'}},
   );
   console.log(result);
}

updateData();