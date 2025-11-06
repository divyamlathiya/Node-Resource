var express = require('express');
const user = require('../../model/userRegister');
const response = require('../../helper/responseManager');
var router = express.Router();

/* GET users listing. */
router.get('/', async(req, res, next) => {
  try {
    const users = await user.find();
    return res.json(users);
  } catch (error) {
    console.log('Error:', error);
    return response.error(res, 'Server error', 500);
  }
});

module.exports = router;
