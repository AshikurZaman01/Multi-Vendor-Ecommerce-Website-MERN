const express = require('express');
const getUser = require('../../Controllers/AuthControllers/getUser');
const authMiddlewear = require('../../Middlewear/AuthMiddlewear/authMiddlewear');
const sellerRegister = require('../../Controllers/AuthControllers/sellerRegister');
const router = express.Router();

router.post('/sellerRegister', sellerRegister);


router.get('/getUser', authMiddlewear, getUser);

module.exports = router;