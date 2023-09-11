const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/e-comm');

const ProductSchema = new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    category:String
});

const saveInDB = async ()=>{
    const ProductModel = mongoose.model('products',ProductSchema);
    let data = new ProductModel({name:"m10",price:1200,brand:"maxx",category:"mobile"});
    let result = await data.save();
    console.log(result);
}

const updateInDB = async ()=>{
    const Product = mongoose.model('products',ProductSchema);
    let data = await Product.updateOne(
        {name:"A5s"},
        {
            $set:{price:390,name:"A6s"}
        }
    )
    console.log(data);
}

const deleteInDB = async ()=>{
   const Product = mongoose.model('products',ProductSchema);
   let data = await Product.deleteOne({name:"A6s"});
}
const findInDB = async ()=>{
    const Product = mongoose.model('products',ProductSchema);
    let data = await Product.find({name:"n4"});
    console.log(data);
 }
 findInDB();

