const express = require('express');
const { createManyProducts, Test, createOneProduct } = require('../controller/ProductController');

const router = express.Router();

router.post('/createManyProducts', createManyProducts);
router.post('/createOneProduct', createOneProduct);
router.get('/test', Test);


module.exports = router;
