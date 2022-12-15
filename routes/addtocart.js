const express = require('express');
const router = express.Router();
const Cart = require('../modals/Cart');
const auth = require('../middleware/auth')


router.post('/', auth, (req,res) => {
    const { userid, productid } = req.body

    const newCart = new Cart ({
        userid,
        productid
    })
    newCart.save()
        .then(cart => {
            res.json(cart)
        })

})

module.exports = router;