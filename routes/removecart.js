const express = require('express');
const router = express.Router();
const Cart = require('../modals/Cart');


router.post('/', (req,res) => {
    const { userid, productid } = req.body
    Cart.deleteOne({ userid,productid })
        .then(cart => {
            console.log(cart)
            res.json('removed')
        })

})

module.exports = router;