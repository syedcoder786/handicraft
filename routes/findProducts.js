const express = require('express');
const router = express.Router();
const Products = require('../modals/Products');
// const auth = require('../middleware/auth')


router.post('/',(req,res) => {
    const {id} = req.body
    console.log(id)
    Products.find({subcategoryid:id})
        // .sort({ date: -1 })
        .then(products => {
            console.log(products)
            res.json(products)
        }).catch(err => {
            console.log(err)
            res.json(err)
        })
            

})

module.exports = router;