const dbconnect = require('./mongodbConnection');

const deleteData= async()=>{
   let data = await dbconnect();
   let result = await data.deleteOne({name:'a2'});
   console.log(result);
   if(result.acknowledged)
   {
       console.log('data deleted');
   }
}

deleteData();