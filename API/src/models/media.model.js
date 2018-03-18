
var mongoose = require('mongoose');

var MediaSchema = mongoose.Schema({
    type: String,
    title: String,
    year: Number,
    description: String,
    userId: String,
    barcode: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Media', MediaSchema);