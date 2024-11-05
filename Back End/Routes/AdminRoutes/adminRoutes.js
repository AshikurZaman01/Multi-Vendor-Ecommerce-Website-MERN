const express = require('express');
const adminLogin = require('../../Controllers/AdminController/adminLogin');
const router = express.Router();

router.post('/adminLogin', adminLogin)

module.exports = router;
