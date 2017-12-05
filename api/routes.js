const express = require('express');

const auth = require('./auth');

const router = express.Router();

router.route('/auth/signup').post(auth.signup); 
router.route('/auth/login').post(auth.login);

module.exports = router;