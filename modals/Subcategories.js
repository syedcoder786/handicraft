const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const SubcategoriesSchema = new Schema({
    categoryid: {
        type:String,
        required:true
    },
    img_path: {
        type:String,
        required:true
    },
    name: {
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

module.exports = Subcategories = mongoose.model('subcategories', SubcategoriesSchema);