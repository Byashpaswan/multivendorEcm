const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/sent/login-signup-otp', authController.sentLoginOtp);
router.post('/signup', authController.createUserHandler
);
router.post('/signin', authController.signin);

router.post('/register',authController.registerUser)
router.post('/login',authController.login);


module.exports = router;