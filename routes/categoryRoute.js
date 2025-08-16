const express = require('express');
const { createManyCategories, Test ,FindCategory} = require('../controller/categorycontroller');

const router = express.Router();

router.post('/createManyCategories', createManyCategories)
router.get('/test', Test)
router.post('/FindCategory', FindCategory)

module.exports = router