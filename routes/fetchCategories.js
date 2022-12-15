const express = require('express');
const router = express.Router();
const Categories = require('../modals/Categories');
// const auth = require('../middleware/auth')


router.get('/', (req,res) => {
    Categories.find()
        // .sort({ date: -1 })
        .then(categories => {
            res.json(categories)
        })

})

module.exports = router;