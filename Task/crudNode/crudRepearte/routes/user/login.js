var express = require('express');
const user = require('../../model/userRegister');
const response = require('../../helper/responseManager');
var router = express.Router();

/* GET users listing. */
router.post('/', async(req, res, next) => {
  try {
    const { email, password } = req.body;

    const foundUser = await user.findOne({ email });
    if (!foundUser) {
      return response.error(res, 'Invalid credantials');
    }

    if (password !== foundUser.password) {
      return response.error(res, 'Invalid credantials');
    }

    return response.success(res, 'Login successfully');
  } catch (error) {
    console.log('Error:', error);
    return response.error(res, 'Server error');
  }
});

module.exports = router;
