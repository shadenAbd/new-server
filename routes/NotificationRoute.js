const express = require('express');
const { createNotification, TestNot } = require('../controller/NotificationController');
const router = express.Router();

router.post('/createNotification', createNotification)
router.get('/createNotification/TestNot', TestNot)


module.exports = router;
