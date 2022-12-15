const express = require('express');
const router = express.Router();
const Cart = require('../modals/Cart');


router.post('/', (req,res) => {
    const { userid, productid } = req.body
    Cart.find({ userid,productid })
        .then(cart => {
            if(cart.length > 0){
                console.log('Already Added')
                res.json({ cartadd:'Added' })
            }else{
                console.log('Not added u cart')
                res.json({ cartadd:'Add To Cart' })
            }
            })
        })

// })

module.exports = router;