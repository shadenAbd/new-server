const express = require('express');
const { createManyProducts, Test, createOneProduct, FindProducts } = require('../controller/ProductController');

const router = express.Router();

router.post('/createManyProducts', createManyProducts);
router.post('/createOneProduct', createOneProduct);
router.get('/test', Test);
router.post ('/FindProducts', FindProducts);


module.exports = router;
