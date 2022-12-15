const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const CategoriesSchema = new Schema({
    img_path: {
        type:String,
        required:true
    },
    category: {
        type:String,
        required:true
    },
    subcategories: {
        type:String,
        required:true
    },
    // date: {
    //     type:Date,
    //     default:Date.now
    // }
})

module.exports = Categories = mongoose.model('categories', CategoriesSchema);