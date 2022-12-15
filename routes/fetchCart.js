const express = require('express');
const router = express.Router();
const Cart = require('../modals/Cart');
const Product = require('../modals/Product');


router.post('/', (req,res) => {
    const { id } = req.body
    var i = 1;
    var prod = new Array()
    Cart.find({ userid:id })
        .then(cart => {
            console.log(cart)
            console.log('length '+ cart.length)
            // i = cart.length;
            if(cart.length !== 0){
            cart.map(({ userid, productid })=>{
                Product.findById(productid)
                    .then(product => {
                        // console.log(product)
                        prod.push(product)
                        // console.log(i)
                        // console.log(prod)
                        if(i == cart.length){
                            console.log(prod)
                            res.json(prod)
                        }
                        i++;
                    })
            })
        }else{
            res.json([])
        }

            

            // for (i = 0; i < cart.length; i++) {
            //     console.log(cart[i].productid)
            //     Product.findById(cart[i].productid)
            //         .then(product => {
            //             // console.log(product)
            //             prod[i] = product
            //             console.log(i)
            //             console.log(prod)
            //             if(i == cart.length - 1){
            //                 console.log(product)
            //                 res.json(prod)
            //             }
            //         })
            //         // if(i == cart.length - 1){
            //         //     console.log(prod)
            //         //     res.json(prod)
            //         // }
                
            // }
            
        })
    })

// })

module.exports = router;