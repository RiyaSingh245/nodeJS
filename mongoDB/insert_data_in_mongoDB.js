const dbconnect = require('./mongodbConnection');

const insert = async ()=>{
    const db = await dbconnect();
    const result = await db.insertMany(
        [
            {name:'v5',brand:'vivo',price:400,category:'mobile'},
            {name:'a2',brand:'samsung',price:400,category:'mobile'},
            {name:'o3',brand:'oppo',price:400,category:'mobile'}
        ]
    )

    if(result.acknowledged)
    {
        console.log(`data inserted`);
    }
}

insert();