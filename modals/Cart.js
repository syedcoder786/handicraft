const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const CartSchema = new Schema({
    userid: {
        type:String,
        required:true
    },
    productid: {
        type:String,
        required:true
    },
    date: {
        type:Date,
        default:Date.now
    }
})

module.exports = Cart = mongoose.model('cart', CartSchema);