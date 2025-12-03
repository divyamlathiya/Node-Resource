var express = require('express');
var router = express.Router();
var updateProfile = require('../../controller/user/updateProfile.js');

/* GET home page. */
router.post('/', async function (req, res, next) {

  await updateProfile(req, res);
  
});

module.exports = router;
