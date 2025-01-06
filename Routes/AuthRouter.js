const router = require('express').Router();
const { signup,login } = require('../Controllers/AuthController');
const {signupValidation, loginValidation} = require('../Middlewares/AuthVaildation')

router.post('/login', loginValidation,login); 
router.post('/signup', signupValidation,signup); 
module.exports = router