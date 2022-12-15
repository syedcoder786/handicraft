const express = require('express');
const router = express.Router();
const Subcategories = require('../modals/Subcategories');
// const auth = require('../middleware/auth')


router.post('/',(req,res) => {
    const {id} = req.body
    // console.log(id)
    Subcategories.find({categoryid:id})
        // .sort({ date: -1 })
        .then(subcategories => {
            // console.log(subcategories)
            res.json(subcategories)
        }).catch(err => {
            res.json(err)
        })
            

})

module.exports = router;