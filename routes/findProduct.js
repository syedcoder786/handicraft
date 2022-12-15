const express = require('express');
const router = express.Router();
// const Product = require('../modals/Product');
const Products = require('../modals/Products');
// const auth = require('../middleware/auth')


router.post('/',(req,res) => {
    const {id} = req.body
    console.log(id)
    Products.findById(id)
        // .sort({ date: -1 })
        .then(product => {
            console.log(product)
            res.json(product)
        }).catch(err => {
            console.log(err)
            res.json(err)
        })
            

})

module.exports = router;