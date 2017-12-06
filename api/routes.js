const express = require('express');

const auth = require('./auth');
const user = require('./user');

const router = express.Router();

router.route('/auth/signup').post(auth.signup); 
router.route('/auth/login').post(auth.login);
router.route('/user').get(user.get);

module.exports = router;