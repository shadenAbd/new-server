const express = require('express');
const { createManyCategories, Test } = require('../controller/categorycontroller');

const router = express.Router();

router.post('/createManyCategories', createManyCategories)
router.get('/test', Test)

module.exports = router