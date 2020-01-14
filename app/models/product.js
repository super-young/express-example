const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let productSchema = new Schema({
    "id":Number,
    "add_date":Date,
    "title":String,
    "price":Number,
    "tags":Array
});
module.exports = productSchema;