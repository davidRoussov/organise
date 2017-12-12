const express = require('express');

const auth = require('./auth');
const user = require('./user');
const f1 = require('./f1');
const f2 = require('./f2');

const router = express.Router();

router.route('/auth/signup').post(auth.signup); 
router.route('/auth/login').post(auth.login);
router.route('/user').get(user.get);
router.route('/f1').post(f1.post);
router.route('/f1').get(f1.get);
router.route('/f2/category').post(f2.createNewCategory);

module.exports = router;