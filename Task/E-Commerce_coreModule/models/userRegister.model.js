const mongooose = require('mongoose');
const constant = require('../utilities/constant.js');

const userSchema = new mongooose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true,
        unique: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongooose.model(constant.MODELS.user, userSchema);