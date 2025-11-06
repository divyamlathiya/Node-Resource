var express = require('express');
const mongoose = require('mongoose');
const user = require('../../model/userRegister');
const response = require('../../helper/responseManager');
var router = express.Router();

/* GET users listing. */
router.post('/', async(req, res, next) => {
  try {
    const newUser = new user(req.body);
    const savedUser = await newUser.save();
    return response.success(res, savedUser, 'User register successfully');    
  } catch (error) {
    console.log('Registration error:', error);

    if (error.code === 11000) {
      return response.error(res, 'Duplicate key error', 400);
    }

    return response.error(res, 'Server error', 500);
  }
});

module.exports = router;
