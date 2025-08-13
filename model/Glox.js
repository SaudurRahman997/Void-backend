const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const planetSchema = new Schema({
    galaxy: { type: String, required: true },
    text: { type: String, required: true },
});

module.exports = mongoose.model('Glox', planetSchema);
