const jwt = require('jsonwebtoken');
var response = require('../utilities/responseManager.js');
require('dotenv').config();

module.exports = function(req, res, next) {
const authHeader = req.headers.authorization;

if (!authHeader) {
    response.onError(res, 'User not loggin');
} else {
    const token = authHeader.split(' ')[1];
    if (token) {
        const decode = jwt.verify(token, process.env.JSON_SECRET);

        req.user = decode;
        next();
    } else {
        response.onError(response, 'Token is missing')
    }
}

};
