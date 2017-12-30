const express = require('express');

const auth = require('./auth');
const user = require('./user');
const f1 = require('./f1');
const f2 = require('./f2');
const f3 = require('./f3');
const timetable = require('./timetable');

const router = express.Router();

router.route('/auth/signup').post(auth.signup); 
router.route('/auth/login').post(auth.login);
router.route('/user').get(user.get);
router.route('/f1').post(f1.post);
router.route('/f1').get(f1.get);
router.route('/f2/category').post(f2.createNewCategory);
router.route('/f2/category').get(f2.getCategories);
router.route('/f2/category').delete(f2.deleteCategory);
router.route('/f2').post(f2.createNote);
router.route('/f2').get(f2.getNotes);
router.route('/f2').put(f2.saveNote);
router.route('/f2').delete(f2.deleteNote);
router.route('/f3').post(f3.createNewCategory);
router.route('/f3').get(f3.getCategories);
router.route('/f3').put(f3.saveCategory);
router.route('/t/settings').put(timetable.saveVisibleTimes);

module.exports = router;