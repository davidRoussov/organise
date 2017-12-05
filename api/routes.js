const express = require('express');

const auth = require('./auth');

const router = express.Router();

router.route('/auth/signup').post(auth.signup); 

module.exports = router;