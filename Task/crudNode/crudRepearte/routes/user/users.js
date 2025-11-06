var express = require('express');
var router = express.Router();
var mongoDb = require('../../utilities/connection');
var constant = require('../../utilities/constant');
const userModel = require('../../model/userRegister.model');
const helper = require('../../utilities/global');

/* GET home page. */
router.post('/', async function(req, res, next) {

    const { name, email, password, cPassword, phone } = req.body;

    if ( name.trim() != null && email.trim() != null && password.trim() != null && cPassword.trim() != null && phone.trim() != null ) {
        if (password === cPassword && password.length >= 6) {
            if (phone.length >= 10) {
                const primary = mongoDb.useDb(constant.DB_NAME);
                const data = await primary.model(constant.Models.users, userModel).create(req.body);
                if (data) {
                    return data;
                } else { 
                    
                }
            } else {
                
            }
        } else {
            
        }
    } else {
        
    }
    res.json({data})
});

module.exports = router;
