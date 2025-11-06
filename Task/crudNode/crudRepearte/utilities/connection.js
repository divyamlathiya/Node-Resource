const mongoose = require('mongoose');

var mongoDb = mongoose.createConnection(process.env.MONGO_URI);

module.exports = mongoDb;