const express = require('express');
const { addUser, getUser, deleteUser } = require('../controller/userController');
const router = express.Router();

router.post('/addUser', addUser)
router.get('/getUser', getUser)
router.delete('/deleteUser', deleteUser)

module.exports = router;
