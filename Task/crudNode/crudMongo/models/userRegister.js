const mongoose = require('mongoose');
const crypto = require('crypto-js');

const userSchema = new mongoose.Schema({
    name : {
      type: String,
      required: true
    },
    email : {
      type: String,
      required: true,
      unique: true,
      trim: true,
      match: [/\S+@\S+\.\S+/, 'Please enter a valid email address']
    },
    password : {
      type: String,
      required: true,
      minlength: [6, 'Password must be more than 6 characters']
    },
    cPassword : {
      type: String,
      required: true,
      validate : {
        validator: function (value) {
          return value === this.password;
        },
        message: 'Confirm password must match with password'
      }
    },
    phone : {
      type: String,
      required: true,
      unique: true,
      match: [/^\+?\d{10,15}$/, 'Please enter a valid mobile number']
    }
  });

  // var enc = crypto.AES.encrypt(password, process.env.CRYPTO_SEC);

  module.exports = mongoose.model('user', userSchema);