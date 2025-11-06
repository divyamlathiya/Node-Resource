const crypto = require('crypto-js');
require('dotenv').config();

const encPass = (password) => {
    const encPass = crypto.AES.encrypt(password, process.env.SECKEY);
    return encPass.toString();
} 

const decPass = (password) => {
    const decPass = crypto.AES.decrypt(encPass, process.env.SECKEY);
    return decPass.toString(crypto.enc.Utf8);
}

module.exports = {encPass,decPass};