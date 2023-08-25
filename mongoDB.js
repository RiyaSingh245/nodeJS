const dbconnect = require('./mongodbConnection');

/*dbconnect().then((resp)=>{
    resp.find().toArray().then((data)=>{
       console.warn(data);
    })
})*/


const main = async ()=>{
    let data = await dbconnect();
    data = await data.find().toArray();
    console.log(data);

}

main();
//console.log(dbconnect());