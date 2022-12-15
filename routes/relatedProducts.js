const express = require('express');
const router = express.Router();
const Products = require('../modals/Products');
// const auth = require('../middleware/auth')


router.post('/', (req,res) => {
    Products.find()
        // .sort({ date: -1 })
        .then(rproducts => {
            console.log(rproducts)
            res.json(rproducts)
        })
        .catch(err => {
            console.log(err)
        })

})

module.exports = router;