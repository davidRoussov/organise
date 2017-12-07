const express = require('express');

const auth = require('./auth');
const user = require('./user');
const f1 = require('./f1');

const router = express.Router();

router.route('/auth/signup').post(auth.signup); 
router.route('/auth/login').post(auth.login);
router.route('/user').get(user.get);
router.route('/f1').post(f1.post);

module.exports = router;