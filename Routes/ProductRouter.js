const router = require('express').Router();
const ensureAuthenticated = require('../Middlewares/Auth');
router.get('/', ensureAuthenticated,(req,res)=> {
    console.log('...logged in user detail',req.user)
    res.status(200).json([
        {
            name: "mobile",
            price:1000
        },
        {
            name: "tv",
            price: 20000
        },
        {
            name: "iphone",
            price: 20000000
        }
    ])
}); 
module.exports = router