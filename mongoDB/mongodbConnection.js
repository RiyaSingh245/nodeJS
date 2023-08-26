const {MongoClient} = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';

const client = new MongoClient(url);
const dataBase = 'e-comm';

async function dbconnect()
{
    let result = await client.connect();
    let db = result.db(dataBase);
    return collection = db.collection('products');
}

module.exports = dbconnect;