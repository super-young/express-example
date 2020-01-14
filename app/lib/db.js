const mongoose = require("mongoose");

const connection = mongoose.createConnection("mongodb://young:123456@172.17.0.1:27017/dev?authSource=admin", { useNewUrlParser: true , useUnifiedTopology: true });

module.exports = connection;