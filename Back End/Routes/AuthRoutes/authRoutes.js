const express = require('express');
const getUser = require('../../Controllers/AuthControllers/getUser');
const authMiddlewear = require('../../Middlewear/AuthMiddlewear/authMiddlewear');
const router = express.Router();

router.get('/getUser', authMiddlewear, getUser);

module.exports = router;