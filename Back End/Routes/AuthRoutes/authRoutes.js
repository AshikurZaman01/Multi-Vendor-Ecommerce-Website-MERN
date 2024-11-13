const express = require('express');
const getUser = require('../../Controllers/AuthControllers/getUser');
const authMiddlewear = require('../../Middlewear/AuthMiddlewear/authMiddlewear');
const sellerRegister = require('../../Controllers/AuthControllers/sellerRegister');
const sellerLogin = require('../../Controllers/AuthControllers/sellerLogin');
const router = express.Router();

router.post('/sellerRegister', sellerRegister);
router.post('/sellerLogin', sellerLogin);


router.get('/getUser', authMiddlewear, getUser);

module.exports = router;