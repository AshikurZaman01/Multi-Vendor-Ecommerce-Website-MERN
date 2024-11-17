const express = require('express');
const adminLogin = require('../../Controllers/AdminController/adminLogin');
const addCategory = require('../../Controllers/AdminController/addCategory');
const authMiddlewear = require('../../Middlewear/AuthMiddlewear/authMiddlewear');
const getCategory = require('../../Controllers/AdminController/getCategory');
const router = express.Router();

router.post('/adminLogin', adminLogin)

router.post('/addCategory', authMiddlewear, addCategory);

router.get('/getCategory', authMiddlewear, getCategory);

module.exports = router;
