var express = require('express');
const user = require('../../models/userRegister');
const response = require('../../helper/responseManager');
var router = express.Router();

router.get('/', async (req, res) => {
  try {
    const users = await user.find(); 
    return res.json(users);
    // return response.success(res, users, 'User list fetched successfully');
  } catch (error) {
    console.error('Error fetching user list:', error);
    return response.error(res, 'Server error', 500);
  }
});

module.exports = router;