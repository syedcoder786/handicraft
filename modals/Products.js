const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ProductsSchema = new Schema({
    categoryid: {
        type:String,
        required:true
    },
    subcategoryid: {
        type:String,
        required:true
    },
    img_path_1: {
        type:String,
        required:true
    },
    img_path_2: {
        type:String,
        required:true
    },
    img_path_3: {
        type:String,
        required:true
    },
    img_path_4: {
        type:String,
        required:true
    },
    img_path_5: {
        type:String,
        required:true
    },
    name: {
        type:String,
        required:true
    },
    price: {
        type:String,
        required:true
    },
    instock: {
        type:Number,
        required:true
    },
    features: {
        type:String,
        required:true
    },
    discription: {
        type:String,
        required:true
    },
    // date: {
    //     type:Date,
    //     default:Date.now
    // }
})

module.exports = Products = mongoose.model('products', ProductsSchema);